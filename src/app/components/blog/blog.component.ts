import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  arrNoticias: Noticia[] = [];
  newNoticia: Noticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
  };

  constructor() {
    this.arrNoticias = [
      {
        titulo:
          '"Creamos electricidad de la nada": la nueva fuente de energía renovable fruto del azar y que se basa en aire húmedo.',
        imagen:
          'https://i.blogs.es/b20388/veronica-alvarado-f5kz8s_v6ma-unsplash/1366_2000.jpeg',
        texto:
          'No solo a golpe de ingenio avanza la ciencia. En ocasiones lo hace por puros ramalazos de suerte. Le ocurrió hace algún tiempo al profesor Jun Yao, de la Universidad de Massachusetts (UMass) Amherst, mientras trabajaba en un sensor para la humedad del aire. El proyecto no tenía mayor intríngulis. Sus conclusiones sí. Cosas del azar, ya se sabe. Mientras trabajaba en el dispositivo un estudiante se olvidó de enchufarlo, pero para asombro de Yao y sus colegas aquel conjunto de tubos microscópicos y nanocables siguió generando una débil señal eléctrica. Desde entonces han continuado indagando. Y con resultados prometedores.',
        fecha: '2023-07-09',
      },
      {
        titulo:
          '"Comer mucha carne es un problema climático". Alguien cree que la solución es que las vacas pasten de forma inteligente.',
        imagen:
          'https://i.blogs.es/2cc8a8/daniela-paola-alchapar-xmyiowjf2d4-unsplash/1366_2000.jpeg',
        texto:
          'Nos gusta la carne. Mucho. Los estudios sobre su producción y consumo lo muestran con claridad meridiana. Los datos recogidos por Statista o Our World in Data, por citar solo dos fuentes, reflejan cómo a lo largo de las últimas décadas sus niveles de producción y consumo se han disparado a escala global. Y no solo por el aumento de la propia población mundial. Se ha incrementado también la cantidad de muslos, chuletas, costillas, bistecs o alitas que cada uno de nosotros devora al cabo del año. Semejante "boom" ha dejado una huella igual de innegable y sobre todo preocupante en el medioambiente, pero... ¿Y si pudiéramos paliarla? Hay quien cree que es posible. La clave: una ganadería más inteligente.',
        fecha: '2023-07-08',
      },
    ];
  }

  cargarNoticias(): string {
    let html: string = '';
    this.arrNoticias.forEach((noticia) => {
      html += `<section class="noticia">
      <h3>${noticia.titulo}</h3>
      <img src="${noticia.imagen}" alt="${noticia.titulo}">
      <p class="noticia__texto">${noticia.texto}</p>
      <span class="noticia__fecha">Publicada el: ${noticia.fecha}</span>
    </section>`;
    });
    return html;
  }

  guardarNoticia(): void {
    console.log(this.newNoticia);
    if (
      this.newNoticia.titulo === '' ||
      this.newNoticia.imagen === '' ||
      this.newNoticia.texto === '' ||
      this.newNoticia.fecha === ''
    ) {
      alert('Todos los datos son obligatorios');
    } else {
      this.arrNoticias.push(this.newNoticia);
      this.newNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    }
  }
}
