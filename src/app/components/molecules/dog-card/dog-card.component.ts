import { Component, Input } from '@angular/core';
import jsPDF from 'jspdf';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent {
  @Input() dog: any;

  isModalOpen: boolean = false;
  vaccineName: string = '';
  applicationDate: string = '';  // Fecha de aplicación de la vacuna

  // Abrir el modal
  openCertificateModal() {
    this.isModalOpen = true;
  }

  // Cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Generar el certificado en PDF
  generateCertificate() {
    const currentDate = new Date().toLocaleDateString();  // Fecha actual
    const doc = new jsPDF();

    // Ruta del logo
    const logoPath = 'logo.png';  // Ruta de tu logo

    // Agregar el logo en el centro superior, ajustando solo el ancho para mantener la relación de aspecto
    doc.addImage(logoPath, 'PNG', 80, 10, 50, 0);  // Solo ajustamos el ancho y dejamos que jsPDF ajuste la altura

    // Configuración del título del certificado
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Certificado de Vacunación Canina', doc.internal.pageSize.getWidth() / 2, 70, { align: 'center' });

    // Subtítulo de la clínica
    doc.setFontSize(14);
    doc.setTextColor(70);
    doc.text('Clínica Veterinaria Huellitas_UP', doc.internal.pageSize.getWidth() / 2, 80, { align: 'center' });

    // Fecha de emisión
    doc.setFontSize(12);
    doc.setTextColor(50);
    doc.text(`Fecha de Emisión: ${currentDate}`, doc.internal.pageSize.getWidth() / 2, 90, { align: 'center' });

    // Ajustar el texto para que no se desborde
    const textX = 20;
    let textY = 100;
    const textWidth = 170;  // Ancho máximo del texto

    // Texto principal del certificado
    const certificateText = `
      Este certificado avala que el perro ${this.dog.name}, perteneciente al Sr./Sra. ${this.dog.owner}, ha sido vacunado conforme a los lineamientos veterinarios recomendados.
      El perro, de raza ${this.dog.breed}, con una edad de ${this.dog.age} años, sexo ${this.dog.sex} y color ${this.dog.color}, recibió la vacuna ${this.vaccineName} el día ${this.applicationDate} en nuestras instalaciones.

      La vacunación administrada tiene como objetivo proteger a ${this.dog.name} contra enfermedades comunes y potencialmente graves.
      Es fundamental que el perro siga un esquema de vacunación adecuado para garantizar su bienestar y mantener una protección constante contra diversos patógenos.
      Esta vacuna ayudará a prevenir la aparición de complicaciones de salud que puedan poner en riesgo la vida del perro o de otros animales con los que entre en contacto.

      Asimismo, se recomienda que ${this.dog.name} continúe con controles veterinarios periódicos para asegurar que su salud se mantenga en óptimas condiciones.
      Las revisiones regulares permiten detectar a tiempo cualquier síntoma o problema que pueda requerir atención veterinaria y asegurar que el esquema de vacunación se encuentre siempre actualizado.

      Este certificado tiene validez únicamente para el perro identificado en el presente documento y no es transferible a otro animal.
      Es importante que el dueño mantenga este documento en resguardo y lo presente en caso de ser requerido en eventos, viajes o actividades que involucren la participación del perro.
    `;
    // Controlar dónde comienza y termina el texto
    doc.text(certificateText, textX, textY, { maxWidth: textWidth, align: 'left' });

    // Aumentar el espacio para evitar que la información del veterinario se sobreponga
    textY += 130;  // Ajusta esta cantidad según sea necesario

    // Firma del veterinario
    doc.setFontSize(12);
    doc.text(`
      Dra. Maria Cristina Grajales
      Médico Veterinario Certificado
      Cédula Profesional: 102345678
    `, doc.internal.pageSize.getWidth() / 2, textY, { align: 'center' });

    // Espacio adicional para la información de la clínica
    textY += 20;

    // Información de la clínica
    doc.setFontSize(10);
    doc.text(`
      Clínica Veterinaria Huellitas_UP
      Calle los Álamos 123, Colonia Centro, Ciudad
      Teléfono: 961-123-4567
      Correo Electrónico: contacto@huellitas_up.com
      Web: www.huellitasUp.com
    `, doc.internal.pageSize.getWidth() / 2, textY + 10, { align: 'center' });

    // Descargar el PDF con el nombre del perro
    doc.save(`${this.dog.name}_certificado.pdf`);

    // Cerrar el modal después de descargar
    this.closeModal();
  }
}
