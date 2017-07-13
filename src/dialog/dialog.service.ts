/*
 MIT License

 Copyright (c) 2017 Temainfo Sistemas

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { Injectable } from '@angular/core';
import { ModalService } from '../modal/modal.service';

import { TlDialogInfo } from './dialog-info/dialog-info';
import { TlDialogAlert } from './dialog-alert/dialog-alert';
import { TlDialogError } from './dialog-error/dialog-error';
import { TlDialogConfirmation } from './dialog-confirmation/dialog-confirmation';

import { infoOptions } from './dialog-info/modal-info-options';

import { ModalAlertOptions } from './dialog-alert/modal-alert-options';
import { ModalErrorOptions } from './dialog-error/modal-error-options';
import { ModalConfirmationOptions } from './dialog-confirmation/modal-confirmation-options';

import { ConfirmationOptions } from './dialog-confirmation/confirmation-options';
import { ErrorOptions } from './dialog-error/error-options';
import { AlertOptions } from './dialog-alert/alert-options';
import { InfoOptions } from './dialog-info/info-options';


@Injectable()
export class DialogService {

    public modalResult;

    constructor( public modalService: ModalService ) {
        console.log('dialogInstance', this);

    }

    info( message, callback, options?: InfoOptions ) {
        this.modalService.createModal( TlDialogInfo, infoOptions, callback );
        this.modalService.componentInjected.instance.message = message;
        if (options) {
            ModalConfirmationOptions.title = options.title ? options.title : ModalConfirmationOptions.title;
            this.modalService.componentInjected.instance.textOk = options.textOk;
        }
    }

    confirmation( message, callback, options?: ConfirmationOptions ) {
        this.modalService.createModal( TlDialogConfirmation, ModalConfirmationOptions, callback );
        this.modalService.componentInjected.instance.message = message;
        if (options) {
            ModalConfirmationOptions.title = options.title ? options.title : ModalConfirmationOptions.title;
            this.modalService.componentInjected.instance.textOk = options.textOk;
            this.modalService.componentInjected.instance.textCancel = options.textCancel;
        }
    }

    alert( message, callback, options?: AlertOptions ) {
        this.modalService.createModal( TlDialogAlert, ModalAlertOptions, callback );
        this.modalService.componentInjected.instance.message = message;
        if (options) {
            ModalAlertOptions.title = options.title ? options.title : ModalAlertOptions.title;
            this.modalService.componentInjected.instance.textClose = options.textClose;
        }
    }

    error( message, callback, options?: ErrorOptions ) {
        this.modalService.createModal( TlDialogError, ModalErrorOptions, callback );
        this.modalService.componentInjected.instance.message = message;
        if (options) {
            ModalErrorOptions.title = options.title ? options.title : ModalErrorOptions.title;
            this.modalService.componentInjected.instance.textOk = options.textOk;
        }
    }
}