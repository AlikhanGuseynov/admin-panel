import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @ViewChild('newRow') formModel: NgForm;
  titleAz = '';
  textAz = '';
  titleEn = '';
  textEn = '';
  titleRu = '';
  textRu = '';
  date: Date;
  isSaved = false;

  constructor(
    private firesServices: AngularFirestore,
    private dataBase: AngularFireDatabase,
  ) {
  }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.dataBase.list('article').valueChanges()
      .subscribe(actions => {
        const arr = actions;
      });
  }


  save(form): void {
    if (form.valid) {
      this.date = new Date();
      const id = new Date().getTime();
      this.dataBase.object('article/' + id).update({
        ['id']: id,
        ['textAz']: this.textAz,
        ['titleAz']: this.titleAz,
        ['textRu']: this.textRu,
        ['titleRu']: this.titleRu,
        ['textEn']: this.textEn,
        ['titleEn']: this.titleEn,
        ['date']: this.date,
        ['state']: false,
      })
        .then(_ => this.setSaved())
        .catch(err => console.log(err, 'You dont have access!'));
    }
  }

  setSaved(): void {
    this.isSaved = true;
    this.textAz = '';
    this.titleAz = '';
    this.textRu = '';
    this.titleRu = '';
    this.textEn = '';
    this.titleEn = '';
    this.date = null;
    setTimeout(() => {
      this.isSaved = false;
    }, 3000);
  }
}


