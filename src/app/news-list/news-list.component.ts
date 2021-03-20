import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

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
        this.articleList = [...(actions)];
        this.loading = false;
      });
  }
}
