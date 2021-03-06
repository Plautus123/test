import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database-deprecated'
import { FirebaseApp } from "angularfire2";
import 'firebase/storage';
import { GalleryImage } from "../models/galleryImage.model";
import * as firebase from 'firebase';


@Injectable({
  
  providedIn: 'root'
})
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      this.uid = auth.uid;
    })
   }
   getImages(): Observable<GalleryImage[]>{
     return this.db.list('uploads');
   }
}
