import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { ArchwizardModule } from 'ng2-archwizard';
import { DpDatePickerModule } from 'ng2-date-picker';
// import { MatSelectModule } from '@angular/material';
// import { MatInputModule } from '@angular/material';
// import { MatFormFieldModule } from '@angular/material';

let importsExportsArray = [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    ArchwizardModule,
    DpDatePickerModule
    // MatSelectModule,
    // MatInputModule,
    // MatFormFieldModule
]

@NgModule({
    imports: [
        importsExportsArray
    ],
    exports: [
        importsExportsArray
    ],
})

export class MaterialModuleLoad { }