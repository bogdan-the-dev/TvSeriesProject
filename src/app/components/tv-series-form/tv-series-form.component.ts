import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TvSeriesService} from "../../services/tv-series.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TvSeries} from "../../../models/tv-series";

@Component({
  selector: 'app-tv-series-form',
  templateUrl: './tv-series-form.component.html',
  styleUrls: ['./tv-series-form.component.scss']
})
export class TvSeriesFormComponent implements OnInit {
  form: FormGroup
  edit: boolean

  private tvSeries: TvSeries
  private id: string

  constructor(private tvSeriesService: TvSeriesService, private router: Router) {
  }

  ngOnInit() {
    this.edit = this.router.url.split('/').pop() === 'edit'
    this.id = sessionStorage.getItem('parameterId')
    this.tvSeries = JSON.parse(sessionStorage.getItem('parameterItem'))
    sessionStorage.removeItem('parameterId')
    sessionStorage.removeItem('parameterItem')
    this.initForm()
  }

  private initForm() {
    if (this.edit) {
      this.form = new FormGroup({
        'name': new FormControl(this.tvSeries.Name, Validators.required),
        'numberOfSeasons': new FormControl(this.tvSeries.NumberOfSeasons, Validators.required),
        'numberOfEpisodes': new FormControl(this.tvSeries.NumberOfEpisodes, Validators.required),
        'rating': new FormControl(this.tvSeries.Rating, Validators.required),
        'plot': new FormControl(this.tvSeries.Plot, Validators.required),
        'finished': new FormControl(this.tvSeries.Finished)
      })
    } else {
      this.form = new FormGroup({
        'name': new FormControl('', Validators.required),
        'numberOfSeasons': new FormControl('', Validators.required),
        'numberOfEpisodes': new FormControl('', Validators.required),
        'rating': new FormControl('', Validators.required),
        'plot': new FormControl('', Validators.required),
        'finished': new FormControl('')
      })
    }
  }

  onSubmit() {
    let tvSeries: TvSeries = {
      Name: this.form.get('name').value,
      NumberOfSeasons: Number(this.form.get('numberOfSeasons').value),
      NumberOfEpisodes: Number(this.form.get('numberOfEpisodes').value),
      Rating: Number(this.form.get('rating').value),
      Plot: this.form.get('plot').value,
      Finished: this.form.get('finished').value
    }
    console.log(tvSeries)
    if(this.edit) {
      this.tvSeriesService.editTvSeres(tvSeries, this.id)
    }
    else {
      this.tvSeriesService.addTvSeries(tvSeries)
    }
    this.router.navigate(['main-page'])
  }

}
