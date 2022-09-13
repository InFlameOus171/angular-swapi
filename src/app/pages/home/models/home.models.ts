import { AbstractControl } from '@angular/forms';
import { Category } from 'src/app/shared/models/categories';

export type FormValues = {
  category?: AbstractControl<Category>;
  searchTerm?: AbstractControl<string>;
};
