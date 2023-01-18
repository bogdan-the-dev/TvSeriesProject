import {Component, OnInit} from '@angular/core';
import {TvSeriesService} from "../../services/tv-series.service";
import {TvSeries} from "../../../models/tv-series";
import {map} from "rxjs/operators"
import {SelectionModel} from "@angular/cdk/collections";
import {faPlus, faTrash, faPenToSquare, faArrowsRotate, faCircleCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {restoreGetExpandoInitializer} from "@angular/compiler-cli/ngcc/src/packages/patch_ts_expando_initializer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tv-series-grid',
  templateUrl: './tv-series-grid.component.html',
  styleUrls: ['./tv-series-grid.component.scss']
})
export class TvSeriesGridComponent implements OnInit{
  public series: { id, tvSeries: TvSeries}[] = []

  displayedColumns: string[] = ['select','Name', 'NumberOfSeasons', 'NumberOfEpisodes', 'Rating', 'Plot', 'Finished']
  selection = new SelectionModel<TvSeries>(false, [])

  faPlus = faPlus
  faTrash = faTrash
  faEdit = faPenToSquare
  faRefresh = faArrowsRotate
  faTrue = faCircleCheck
  faFalse = faCircleXmark

  constructor(private tvSeriesService: TvSeriesService, private router: Router) {
  }

  ngOnInit(): void {
    this.tvSeriesService.getAllTvSeries()
      .pipe(
        map((actions: any) => {
          return actions.map(a => {
            let data = a.payload.doc.data() as TvSeries
            let id = a.payload.doc.id
            return {id: id, tvSeries: data}
          })
        })
      )
      .subscribe(res => {
        this.series = res
      })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.series.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.series.forEach(row => this.selection.select(row.tvSeries));
  }

  onEdit() {
    sessionStorage.setItem('parameterItem', JSON.stringify(this.selection.selected[0]))
    sessionStorage.setItem('parameterId', this.getId())
    this.router.navigate(['edit'])
  }

  private getId(): string {
    let id
    let selected = this.selection.selected[0]
    this.series.forEach(element => {
      if(element.tvSeries === selected) {
        id = element.id
      }
    })
    return id
}

  onDelete(){
    this.tvSeriesService.deleteTvSeries(this.getId())
    this.selection.clear()
  }

  getDataSource(): TvSeries[] {
    const data: TvSeries[] = []
    this.series.forEach(elem => {
      data.push(elem.tvSeries)
    })
    return data
  }

  public showAdminButtons(): boolean {
    return sessionStorage.getItem('isAdmin') === 'true'
  }


}
