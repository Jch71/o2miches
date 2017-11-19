export default class ApiService {
  constructor($http) {
  	this.$http = $http;
    this.data = {
      url: 'http://o2m-event.fr/api'
    };
  }

  callApi (method, params, postParams) {
    
    console.log(postParams);

    let url = this.data.url + '/rest.php/' + params.table;
    if (params.ID) {
    	url += '/' +params.ID
    }
    if(method == 'GET'){
        url+= '?transform=1';
    }
    if(method == 'DELETE' || method == 'PUT'){
        url+= '/' + params.ID;
    }
  	return(this.$http({
  		method: method,
  		url: url, 
  		data : postParams
	}).then((responseSuccess) => {
  		return(responseSuccess.data);
  	}, (responseError) => {
    	return(responseError);
  }));

  }
}