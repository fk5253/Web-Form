// Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBH1OdrBCkzl0-xhI3e3OOgczgK3XcYdTk",
    authDomain: "registration-form-database.firebaseapp.com",
    databaseURL: "https://registration-form-database-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "registration-form-database",
    storageBucket: "registration-form-database.appspot.com",
    messagingSenderId: "1007045936920",
    appId: "1:1007045936920:web:6306166ad49283f781406d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   var firebaseConfig = {
//     apiKey: "AIzaSyAJBCziamMb0zven8aBkpNPuuswARERyRA",
//     authDomain: "trial-database-a5d98.firebaseapp.com",
//     projectId: "trial-database-a5d98",
//     storageBucket: "trial-database-a5d98.appspot.com",
//     messagingSenderId: "271955876555",
//     appId: "1:271955876555:web:f08e6e79695ddb13d2594e"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
	

	function dd()
	{
	var Element = document.querySelector('input');
	var img = document.querySelector('img');
	Element.addEventListener('change', function() {
	var url = URL.createObjectURL(Element.files[0]);
	img.src = url;
	});
	}
	
	var fnm,lnm,mob_no,em_id,state,city,address,Person_to_meet,Reason_M,fev,cough,breath_diff,resp_dis,meet_date,meet_time,area_code;
	function getData()
	{
	
		fnm=document.getElementById('first_nm').value;
		lnm=document.getElementById('last_nm').value;
		mob_no=document.getElementById('mob').value;
		area_code=document.getElementById('area_co').value;
		em_id=document.getElementById('email').value;
		state=document.getElementById('state_nm').value;
		city=document.getElementById('city_nm').value;
		address=document.getElementById('address').value;
		Person_to_meet=document.getElementById('person_list').value;
		Reason_M=document.getElementById('purposeMeet').value;
		meet_date=document.getElementById('txt_dt').value;
		meet_time=document.getElementById('txt_tm').value;
		
		
		var ele=document.getElementsByName('fever');
		for(i=0;i<ele.length;i++)
		{
			if(ele[i].checked)
			{
				fev=ele[i].value;
			}
		}
		
		var ele2=document.getElementsByName('cough');
		for(i=0;i<ele2.length;i++)
		{
			if(ele2[i].checked)
			{
				cough=ele2[i].value;
			}
		}
		
		
		var ele3=document.getElementsByName('radio3');
		for(i=0;i<ele3.length;i++)
		{
			if(ele3[i].checked)
			{
				breath_diff=ele3[i].value;
			}
		}
		
		var ele4=document.getElementsByName('radio4');
		for(i=0;i<ele4.length;i++)
		{
			if(ele4[i].checked)
			{
				resp_dis=ele4[i].value;
			}
		}
		
		
		
	}

  // Your web app's Firebase configuration
  
  
  function insert_data()
  {
  
	  getData();
	  firebase.database().ref('Visitors/'+mob_no).set({
		Mobile_NO:mob_no,
		AreaCode:area_code,
		First_Name:fnm,
		Last_Name:lnm,
		Email_ID:em_id,
		Address:address,
		City:city,
		State:state,
		WhomToMeet:Person_to_meet,
		Reason:Reason_M,
		MDate:meet_date,
		MTime:meet_time,
		FeverStatus:fev,
		Cough:cough,
		Breathing_Difficulty:breath_diff,
		Resp_Problem:resp_dis
		
		
	  });
  }
  
  function check_doc()
  {
					mob_no=document.getElementById('mob').value;
					
					firebase.database().ref('Visitors/'+mob_no).on('value',function(snapshot){
					var ret_value=snapshot.val();
					if(ret_value==null){
					alert("Sorry ...");
					return;
					}
					else
					{
					
					document.getElementById('mob').value=snapshot.val().Mobile_NO;
					document.getElementById('area_co').value=snapshot.val().AreaCode
					document.getElementById('email').value=snapshot.val().Email_ID;
					document.getElementById('address').value=snapshot.val().Address;
					document.getElementById('city_nm').value=snapshot.val().City;
					document.getElementById('state_nm').value=snapshot.val().State;
					document.getElementById('last_nm').value=snapshot.val().First_Name;
					document.getElementById('first_nm').value=snapshot.val().Last_Name;
					}
					});
				
  }
  