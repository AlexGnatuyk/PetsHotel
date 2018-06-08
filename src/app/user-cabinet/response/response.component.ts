import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../models/response';
import * as fromRoot from '../../ngrx';
import * as fromCabinet from '../ngrx';
import * as cabinetActions from '../ngrx/cabinet.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  @Input() response: Response;
  @Input() requestId: number;

  constructor(protected store: Store<fromRoot.AppState>) { }

  ngOnInit() {
  }
  pay() {
    this.store.dispatch(new cabinetActions.RequestSendPayAction(this.requestId));
  }

}
