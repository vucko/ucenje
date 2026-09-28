import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section class="about">
      <h1>O nama</h1>
      <p>
        Ovo je jednostavna o-nama stranica. Ovdje možeš pisati bilo kakav
        tekst koji želiš da se prikaže posjetiocima.
      </p>
      <p>
        Na primjer, možeš opisati svog tima, misiju kompanije ili bilo šta
        drugo što smatraš relevantnim.
      </p>
    </section>
  `,
  styles: `
    .about {
      max-width: 640px;
      margin: 2rem auto;
      padding: 1.5rem;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif;
    }
    .about h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #1f1f1f;
    }
    .about p {
      line-height: 1.6;
      color: #3a3a3a;
      margin: 0 0 1rem 0;
    }
  `
})
export class About {}
