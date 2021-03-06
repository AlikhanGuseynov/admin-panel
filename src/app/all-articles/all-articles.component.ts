import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {

  articleList = [];
  loading = false;

  constructor(
    private firesServices: AngularFirestore,
    private dataBase: AngularFireDatabase,
  ) {
  }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.loading = true;
    this.dataBase.list('article').valueChanges()
      .subscribe(actions => {
        const arr = actions;
        this.articleList = [...arr];
        this.loading = false;
      });
  }

  toggleState(article): void {
    this.dataBase.object('article/' + article.id).update({['state']: !article.state})
      .then(_ => {
        return false;
      })
      .catch(err => console.log(err, 'You dont have access!'));
  }

}
