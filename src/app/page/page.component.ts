import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
        console.log(arr);
      });
  }


  save(): void {
    console.log(0);
    const id = new Date().getTime();
    this.dataBase.object('article/' + id).update({
      ['id']: id,
      ['textAz']: this.textAz,
      ['titleAz']: this.titleAz,
      ['textRu']: this.textRu,
      ['titleRu']: this.titleRu,
      ['textEn']: this.textEn,
      ['titleEn']: this.titleEn
    })
      .then(_ => console.log('TRUE'))
      .catch(err => console.log(err, 'You dont have access!'));
    // this.dataBase.object('article/ru/').update({['text']: this.textRu, ['title']: this.titleRu})
    //   .then(_ => console.log('TRUE'))
    //   .catch(err => console.log(err, 'You dont have access!'));
    // this.dataBase.object('article/en/').update({['text']: this.textEn, ['title']: this.titleEn})
    //   .then(_ => console.log('TRUE'))
    //   .catch(err => console.log(err, 'You dont have access!'));
    console.log(1);
  }
}


