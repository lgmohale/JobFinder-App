import React, { Component } from 'react';

import CompanyDetailsFrom from './CompanyDetailsForm';
import VacancyDetailsForm from './VacancyDetailFrom';
import Comfirm from './Comfirm'

export class JobForm extends Component{

    state = {
        step: 1,
        company_name: '',
        company_description: '',
        company_email: '',
        company_website: '',
        company_number: '',
        job_title: '',
        job_location: '',
        job_resp: '',
        job_req: '',
        job_budget: ''
    }


    // Proceed to the next sterp
    nextStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Go back to previouse step
    prevStep =() =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e =>{
        this.setState({
            [input] : e.target.value
        })
    }

    render(){

        const { step } = this.state;
        const { company_name, company_description, company_email, company_website, company_number, job_title, job_location, job_resp, job_req, job_budget} = this.state;
        const values = { company_name, company_description, company_email, company_website, company_number, job_title, job_location, job_resp, job_req, job_budget}
        
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
                return (
                    <CompanyDetailsFrom 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values }
                    />
                )
            case 2:
                return (
                    <VacancyDetailsForm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Comfirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default JobForm;