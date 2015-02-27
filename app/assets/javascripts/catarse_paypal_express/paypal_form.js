App.addChild('PayPalForm', _.extend({
  el: '#catarse_paypal_adaptive_form',

  events: {
    'click input[type=submit]': 'onSubmitToPayPal',
    'keyup #user_document' : 'onUserDocumentKeyup'
  },

  activate: function() {
    this.loader = this.$('.loader img');
    this.parent.contributionId = $('input#contribution_id').val();
    this.parent.projectId = $('input#project_id').val();
  },

  onSubmitToPayPal: function(e) {
    $(e.currentTarget).hide();
    this.loader.show();
  }
}, window.PayPal.UserDocument));
