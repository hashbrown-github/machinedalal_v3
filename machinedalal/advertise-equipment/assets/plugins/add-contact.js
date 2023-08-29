"use strict";

// Class definition
var KTContactsAdd = function () {
	// Base elements
	var _wizardEl;
	var _formEl;
	var _wizard;
	var _avatar;
	var _validations = [];

	// Private functions
	var initWizard = function () {
		// Initialize form wizard
		_wizard = new KTWizard(_wizardEl, {
			startStep: 1, // initial active step number
			clickableSteps: true  // allow step clicking
		});

		// Validation before going to next page
		_wizard.on('beforeNext', function (wizard) {
			_validations[wizard.getStep() - 1].validate().then(function (status) {
				if (status == 'Valid') {
					_wizard.goNext();
					KTUtil.scrollTop();
				} else {
					
				}
			});

			_wizard.stop();  // Don't go to the next step
		});

		// Change Event
		_wizard.on('change', function (wizard) {
			KTUtil.scrollTop();
		});
	}

	var initValidation = function () {
		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/

		// Step 1
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				//fields: {
//					firstname: {
//						validators: {
//							notEmpty: {
//								message: 'First Name is required'
//							}
//						}
//					},
//					lastname: {
//						validators: {
//							notEmpty: {
//								message: 'Last Name is required'
//							}
//						}
//					},
//					companyname: {
//						validators: {
//							notEmpty: {
//								message: 'Company Name is required'
//							}
//						}
//					},
//					phone: {
//						validators: {
//							notEmpty: {
//								message: 'Phone is required'
//							},
//							phone: {
//								country: 'US',
//								message: 'The value is not a valid US phone number. (e.g 5554443333)'
//							}
//						}
//					},
//					email: {
//						validators: {
//							notEmpty: {
//								message: 'Email is required'
//							},
//							emailAddress: {
//								message: 'The value is not a valid email address'
//							}
//						}
//					},
//					companywebsite: {
//						validators: {
//							notEmpty: {
//								message: 'Website URL is required'
//							}
//						}
//					}
//				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		));

		// Step 2
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				//fields: {
//					// Step 2
//					communication: {
//						validators: {
//							choice: {
//								min: 1,
//								message: 'Please select at least 1 option'
//							}
//						}
//					},
//					language: {
//						validators: {
//							notEmpty: {
//								message: 'Please select a language'
//							}
//						}
//					},
//					timezone: {
//						validators: {
//							notEmpty: {
//								message: 'Please select a timezone'
//							}
//						}
//					}
//				},
				plugins: {
			//		trigger: new FormValidation.plugins.Trigger(),
			//		bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		));

		// Step 3
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				//fields: {
//					address1: {
//						validators: {
//							notEmpty: {
//								message: 'Address is required'
//							}
//						}
//					},
//					postcode: {
//						validators: {
//							notEmpty: {
//								message: 'Postcode is required'
//							}
//						}
//					},
//					city: {
//						validators: {
//							notEmpty: {
//								message: 'City is required'
//							}
//						}
//					},
//					state: {
//						validators: {
//							notEmpty: {
//								message: 'state is required'
//							}
//						}
//					},
//					country: {
//						validators: {
//							notEmpty: {
//								message: 'Country is required'
//							}
//						}
//					},
//				},
//				plugins: {
//					trigger: new FormValidation.plugins.Trigger(),
//					bootstrap: new FormValidation.plugins.Bootstrap()
			//	}
			}
		));
	}

	

	return {
		// public functions
		init: function () {
			_wizardEl = KTUtil.getById('kt_contact_add');
			_formEl = KTUtil.getById('kt_contact_add_form');

			initWizard();
			initValidation();
		//	initAvatar();
		}
	};
}();

jQuery(document).ready(function () {
	KTContactsAdd.init();
});
