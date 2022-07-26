import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {AuthService} from "../../../shared/authentication/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  isLoading = false;
  signUpSubscription: Subscription ;
  countries: string[] = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua',
    'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
    'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia',
    'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia',
    'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands',
    'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
    'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia',
    'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia',
    'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece',
    'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia',
    'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia',
    'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands',
    'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
    'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
    'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda',
    'Saint Pierre', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia',
    'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain',
    'Sri Lanka', 'St Kittsmp', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland',
    'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo',
    'Tonga', 'Trinidad', 'Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks', 'Uganda',
    'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam',
    'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
  form: FormGroup;
  errorMessage: string;

  constructor(public authService: AuthService, private title: Title) {
  }

  ngOnInit() {
    this.setupForm();
    this.title.setTitle('HealStack - Create an account');
  }

  setupForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      address: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    this.isLoading = true;
    const firstName = this.form.get('name').value.split(' ')[0]
    const lastName = this.form.get('name').value.split(' ')[1]
    this.signUpSubscription = this.authService.signUp({...this.form.value,firstName,lastName}).subscribe((responseData: any) => {
      this.isLoading = false;
      console.log('responseData: ',responseData)
      this.authService.createUser(responseData);
      this.authService.redirectToHome();
    }, (error:any) => {
      this.isLoading = false;
      this.errorMessage = error.error.error.includes('E11000') ? 'Account already exists' : 'Please verify your information';
    });
  }

  ngOnDestroy(): void {
    if (this.signUpSubscription) {
      this.signUpSubscription.unsubscribe();
    }
  }


}
