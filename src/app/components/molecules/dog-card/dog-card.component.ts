import { Component, Input } from '@angular/core';
import { DogService } from '../../../services/dog.service';
import { FormsModule } from '@angular/forms';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    DatePipe,
    NgForOf
  ],
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent {
  @Input() dog!: { id: number; user_id: number; name: string; age: number; breed: string; color: string; sexo: string; owner: string };

  isVaccineModalOpen = false;
  isCertificateModalOpen = false;
  vaccineName = '';
  creationDate = '';
  vaccines: Array<{ id: number; vacuna: string; fechaCreacion: string }> = [];

  constructor(private dogService: DogService) {}

  openVaccineModal(): void {
    this.isVaccineModalOpen = true;
  }

  closeVaccineModal(): void {
    this.isVaccineModalOpen = false;
    this.vaccineName = '';
    this.creationDate = '';
  }

  registerVaccine(): void {
    if (this.vaccineName && this.creationDate) {
      const vaccineData = {
        userId: this.dog.user_id,
        dogId: this.dog.id,
        vaccineName: this.vaccineName,
        creationDate: this.creationDate
      };

      this.dogService.registerVaccine(vaccineData).subscribe(
        (response) => {
          console.log('Vacuna registrada exitosamente:', response);
          this.closeVaccineModal();
        },
        (error) => {
          console.error('Error al registrar vacuna:', error);
        }
      );
    } else {
      console.error('Debe llenar todos los campos');
    }
  }

  openCertificateModal(): void {
    this.dogService.getDogVaccines(this.dog.id).subscribe(
      (response) => {
        this.vaccines = response;
        console.log('Vacunas cargadas:', response);
        this.isCertificateModalOpen = true;
      },
      (error) => {
        console.error('Error al cargar vacunas:', error);
      }
    );
  }

  closeCertificateModal(): void {
    this.isCertificateModalOpen = false;
  }

  downloadCertificate(vaccineId: number): void {
    this.dogService.getCertificateDetails(vaccineId).subscribe(
      (data) => {
        this.generatePDF(data);
      },
      (error) => {
        console.error('Error al obtener los detalles del certificado:', error);
      }
    );
  }

  private generatePDF(data: any): void {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Certificado de Vacunación', 20, 20);
    doc.text(`Nombre del Perro: ${data.nombre_perro}`, 20, 30);
    doc.text(`Dueño: ${data.nombre_dueno}`, 20, 40);
    doc.text(`Raza: ${data.raza}`, 20, 50);
    doc.text(`Edad: ${data.edad_perro}`, 20, 60);
    doc.text(`Sexo: ${data.sexo}`, 20, 70);
    doc.text(`Color: ${data.color}`, 20, 80);
    doc.text(`Vacuna: ${data.nombre_vacuna}`, 20, 90);
    doc.text(`Fecha de Vacunación: ${new Date(data.fecha_vacuna).toLocaleDateString()}`, 20, 100);

    doc.save(`${data.nombre_perro}_Certifica do_Vacuna.pdf`);
  }
}
