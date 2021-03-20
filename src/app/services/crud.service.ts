import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  items: any;

  constructor(private firesServices: AngularFirestore, private dataBase: AngularFireDatabase) {
  }

  add(value): void {
    const itemRef = this.dataBase.object('app-json');
    itemRef.set({name: 'new name!'})
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'You dont have access!'));
  }

  list(): void {
    this.items = this.dataBase.list('app-json').snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          console.log(action.key);
          console.log(action.payload.val());
        });
      });
    console.log(this.items);
  }

}
