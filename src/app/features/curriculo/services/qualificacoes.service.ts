import { Injectable } from '@angular/core';
import { Qualificacoes } from '../pages/models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class QualificacoesService {

  qualificacoes: Array<Qualificacoes> = [
    {
      id: 1,
      certificado: "/assets/certificados/Como organizar o orçamento familiar.pdf_1.jpg",
      curso: "Como Organizar o Orçamento Familiar - FGV Online - 12 horas",
    },

    {
      id: 2,
      certificado: "/assets/certificados/SpeedCursos - Pacote office.pdf_1.jpg",
      curso: "Informática Módulo Básico - SpeedCursos - 96 horas"
    },

    {
      id: 2,
      certificado: "/assets/certificados/SpeedCursos - WebDesign.pdf_1.jpg",
      curso:  "Informática Web Design - 56 horas"
    },

    {
      id: 3,
      certificado: "/assets/certificados/SpeedCursos - Editoração grafica frente e verso.pdf_1.jpg",
      curso: "Informática Editoração Gráfica - SpeedCursos - 56 horas"
    },

    {
      id: 4,
      certificado: "/assets/certificados/Signum - Recepção hospitalar.pdf_1.jpg",
      curso: "Recepção Hospitalar - SIGNUM - 16 horas"
    },

    {
      id: 5,
      certificado: "/assets/certificados/Fundaçaõ Bradesco - Fundamentos de TI  Hardware e Software.pdf_1.jpg",
      curso: "Fundamentos de TI: Hardware e Software - Fundação Bradesco - 15 horas"
    },

    {
      id: 6,
      certificado: "/assets/certificados/Fundação Bradesco - Word 2013.pdf_1.jpg",
      curso: "Microsoft Word 2013 Básico - Fundação Bradesco - 09 horas"
    },

    {
      id: 7,
      certificado: "/assets/certificados/Fundação Bradesco - Excel 2013.pdf_1.jpg",
      curso: "Microsoft Excel 2013 Básico - Fundação Bradesco - 15 horas"
    },

    {
      id: 8,
      certificado: "/assets/certificados/Fundação Bradesco - POWERPOINT 2013.pdf_1.jpg",
      curso: "Microsoft PowerPoint 2013 Básico - Fundação Bradesco - 12 horas"
    },

    {
      id: 9,
      certificado: "/assets/certificados/NepsCursos.png",
      curso: "Principios Básicos de um Computador - NepsAcademy - 10 horas"
    },

    {
      id: 10,
      certificado: "/assets/certificados/Certificado_Logicadeprogramação_ViaRapida.pdf_1.jpg",
      curso: "Lógica de Programação - Univesp-ViaRapida - 80 horas"
    },

    {
      id: 11,
      certificado: "/assets/certificados/Certificado_SalesForce.pdf_1.jpg",
      curso: "Formação de Desenvolvedor Salesforce - Fundação FAT 84 horas"
    },

    {
      id: 12,
      certificado: "/assets/certificados/Jornada Python.pdf_1.jpg",
      curso: "Jornada Python: Linguagem Python - Samsung Ocean - 09 horas"
    },

    {
      id: 13,
      certificado: "/assets/certificados/Programando para web com Python, CSS e HTML.pdf_1.jpg",
      curso: "Jornada Python: Programando para web com Python, CSS e HTML - Samsung Ocean - 09 horas"
    },

    {
      id: 14,
      certificado: "/assets/certificados/Web Scraping com Python.pdf_1.jpg",
      curso: "Web Scraping com Python - Samsung Ocean - 06 horas"
    },

    {
      id: 15,
      certificado: "/assets/certificados/Certificado FIAP Python.pdf_1.jpg",
      curso: "Nano Course Python - FIAP - 80 horas"
    },

    {
      id: 16,
      certificado: "/assets/certificados/Certificado - Introdução ao Git e ao GitHub.pdf_1.jpg",
      curso: "Introdução ao Git e ao GitHub - Digital Innovation One - 5 horas"
    },

    {
      id: 17,
      certificado: "/assets/certificados/Certificado - HTML Web Developer.pdf_1.jpg",
      curso:  "HTML Web Developer - Digital Innovation One - 27 horas"
    },

    {
      id: 18,
      certificado: "/assets/certificados/Certificado - Conceitos e melhores práticas com banco de dados PostgreSQL.pdf_1.jpg",
      curso: "Conceitos e melhores práticas com bancos de dados PostgreSQL - Digital Innovation One- 09 horas"
    },

    {
      id: 19,
      certificado: "/assets/certificados/Certificado - Projetos ágeis com SCRUM.pdf_1.jpg",
      curso:  "Projetos ágeis com SCRUM - Digital Innovation One - 02 horas"
    },

    {
      id: 20,
      certificado: "/assets/certificados/Certificado - Desenvolvimento básico em Java.jpg",
      curso:  "Desenvolvimento básico em Java - Digital Innovation One - 09 horas"
    },

    {
      id: 21,
      certificado: "/assets/certificados/Building Scalable Bots Using Automation 360.jpg",
      curso:  "Building Resilient Bots Using Automation 360 - Automation AnyWhere - 2 horas"
    },

  ] 

  getQualificacoes(){
    return this.qualificacoes;
  }

  getCertificadoById(id: string){
    return this.qualificacoes.find((item) => item.id === parseInt(id));
  }
  constructor() { }
}
