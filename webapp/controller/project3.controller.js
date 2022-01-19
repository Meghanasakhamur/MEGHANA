sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui.view2.project3.controller.project3", {
            onInit: function () {
                var oEmpData={
                    "Employee":{
                        "FName":"megha",
                        "LName":"S", 
                        "Email":"sakamurimeghana@gmail.com",
                        "MobileNumber":"7032746193",
                        "Gender":true,
                        "H.No":"109/990",
                        "LandMark":"hhhgfnkiu",
                        "Pincode":"524322"
 
                    },
                    "DailogEmployeeDetails":{},
                    "EmployeeValueState":
                    {
                        "FName_VS":"Error",
                        "FName_VST":"please enter the first name",
                        "LName_VS":"None",
                        "LName_VST":""
                    },
                    "EmployeeList":[
                        {
                         "Employee_id":"801",
                         "FName":"meghana",
                         "LName":"sakhamuri",
                         "Email":"uhhghh",
                         "MobileNumber":"7896567788",
                         "Gender":"Female",
                         "H.No":"768/98",
                         "LandMark":"uyhk",
                         "Pincode":"534233"
                        },
                        {
                            "Employee_id":"623",
                            "FName":"Likki",
                            "LName":"Mal",
                            "Email":"sajhfakjk@gmail.com",
                            "MobileNumber":"9766777780",
                            "Gender":"Female",
                            "H.No":"878/00",
                            "LandMark":"ghlkjhk",
                            "Pincode":"78696788"
                        },
                    ]
 
                    };
                    var oModel=new sap.ui.model.json.JSONModel(oEmpData);
                    this.getView().setModel(oModel,"EmpModel");
            },
           onPressSave:function()
           {
               var oEmpModel=this.getView().getModel("EmpModel");
               var oEmpData=oEmpModel.getProperty("/Employee");
               if(!oEmpData.FName && !oEmpData.LName || !oEmpData.Email){
                   var msg = 'Enter mandatory fields';
        MessageToast.show(msg);
               }
               else{
                   var emplist = oEmpModel.getProperty("/EmployeeList");
                   emplist.push(oEmpData);
                   oEmpModel.setProperty("/EmployeeList", emplist);
                   var msgs = 'Record inserted';
                   MessageToast.show(msgs);
               }
            },
                   //if(!oEmpData.FName)
            //        {
            //            oEmpModel.setProperty("/EmpValueSate/FName_VS","Error");
            //            oEmpModel.setProperty("/EmpValueState/FName_VST","please enter your first name");
            //        }
            //        if(!oEmpData.LName)
            //        {
            //         oEmpModel.setProperty("/EmpValueSate/LName_VS","Error");
            //         oEmpModel.setProperty("/EmpValueState/LName_VST","please enter your Last name");  
            //        }
            //    }
            
           onPressClear:function(){
 
           },
           onChangeFName:function(oEvent)
           {
               var sValue=oEvent.getSource().getValue();
               if(sValue.length >= 10)
               {
                   oEvent.getSource().EmployeeValueState("Error");
                   oEvent.getSource().EmployeeValueStateText(" length should be 15");
               }
               else{
                   oEvent.getSource().EmployeeValueState("none");
                   oEvent.getSource().EmployeeValueStateText("");
               }
           },
           onChangeMobileNumber:function(oEvent)
           {
               var sValue=oEvent.getSource().getValue();
               if(sValue.length!=10)
               {
                oEvent.getSource().EmployeeValueState("Error");
                oEvent.getSource().EmployeeValueStateText(" length should be 10");
               }
               else{
 
                oEvent.getSource().EmployeeValueState("none");
                oEvent.getSource().EmployeeValueStateText("");
               }
           },
           onSelectGender:function(oEvent)
           {
               var oEmpModel=this.getView().getModel("EmpModel");
               var sSelectedData=oEvent.getSource().getSelectedButton().getText();
               oEmpModel.setProperty("/Employee/Gender",sSelectedData);
           },
            MyFormatter:function(FName,LName,Gender){
               var sValue;
               if(Gender=="Female")
               {
                   sValue="Mr." + FName  + " " + LName;
                   //sValue="Mr.";
               }
               else if(Gender=="Female")
               {
                   sValue="Mrs." + FName + " " + LName ;
                   //sValue="Mrs.";
               }
               return sValue;
            },
            ValidateMobileNum:function(MobileNumber)
            {
                if(MobileNumber.length==10){
                    return 'Success';
                }
                else if (MobileNumber.length <10 || MobileNumber.length> 10)
                {
                    return 'Error';
                }
            },
                onPressShow:function(oEvent){
                    var that=this;
                    let sSelectedPath=oEvent.getSource().getBindingContext("EmpModel").getPath();
                    let oModel=this.getView().getModel("EmpModel");
                    let oSelectedData=oModel.getProperty(sSelectedPath);
                    oModel.setProperty("/DailogEmployeeDetails",oSelectedData);
                    if(!that._oDailogEmployeeDetails)
                    {
                        that._oDailogEmployeeDetails=sap.ui.xmlfragment(
                            this.getView().getId(),
                            "ui.view2.project3.fragment.DetailEmployee",
                            this
                        );
                    }
                    that.getView().addDependent(that._oDailogEmployeeDetails);
                    that._oDailogEmployeeDetails.open();
                },
                onclose:function(){
                    var that=this;
                    if(that._oDailogEmployeeDetails){
                        that.getView().removeDependent(that._oDailogEmployeeDetails);
                        that._oDailogEmployeeDetails.close();
                    }
                }
            });
    });
