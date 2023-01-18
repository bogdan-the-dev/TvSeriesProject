import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/compat/firestore";
import {TvSeries} from "../../models/tv-series";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {

  private tvSeriesCollection;

  constructor(private db: AngularFirestore) {
    this.tvSeriesCollection = this.db.collection<TvSeries>('tv-series')
  }

  public getAllTvSeries() {
    return this.tvSeriesCollection.snapshotChanges()
  }

  public addTvSeries(elem: TvSeries) {
    this.tvSeriesCollection.add(elem)
  }

  public editTvSeres(elem: TvSeries, id: string) {
    this.tvSeriesCollection.doc(id).update(elem)
  }

  public deleteTvSeries(id: string) {
    this.tvSeriesCollection.doc(id).delete()
  }
}
