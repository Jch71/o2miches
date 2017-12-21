import template from './contact.html';

export let ContactComponent = {
    templateUrl: template,
    selector: 'contact',
    bindings: {},
    /* @ngInject */
    controller: class ContactCtrl {
        /* @ngInject */
        constructor($http) {
            this.$http = $http;
            this.url = 'http://o2m-event.fr/api/sendMail.php';
            this.result = 'hidden'
            this.resultMessage;
            this.formData; //formData is an object holding the name, email, subject, and message
            this.submitButtonDisabled = false;
            this.submitted = false; //used so that form errors are shown only after the form has been submitted

        }


        submit(contactform, e) {
            e.preventDefault();
            this.submitted = true;
            this.submitButtonDisabled = true;
            if (contactform.$valid) {
                this.$http({
                    method: 'POST',
                    url: this.url,
                    data: this.param(this.formData), //param method from jQuery
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //set the headers so angular passing info as form data (not request payload)
                }).then((data) => {
                        console.log(data);
                        this.submitButtonDisabled = true;
                        this.resultMessage = "Votre message a bien été envoyé avec succès";
                        this.result = 'bg-success';


                    }, (data) => {
                        this.submitButtonDisabled = false;
                        this.resultMessage = "Une erreur est survenue lors de l'envoi de votre message ... ";
                        this.result = 'bg-danger';
                    })
                
        } else {
            this.submitButtonDisabled = false;
            this.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            this.result = 'bg-danger';
        }
    }

    param(data) {

        var returnString = '';
        for (var d in data) {
            if (data.hasOwnProperty(d))
                returnString += d + '=' + data[d] + '&';
        }
        return returnString.slice(0, returnString.length - 1);

    };

}
};