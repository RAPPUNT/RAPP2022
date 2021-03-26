// EditProfileListing.jsx

import React from 'react';
import { Form, Button, FormText } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import '../Application.scss';
import { Link } from "react-router-dom";
import InputTag from "../AddProjectPage/InputTag"
import axios from 'axios';



class EditProfileListing extends React.Component {


  state = {
      name: '',
      owner: '',
      ownerID: '',
      contactInfo: '',
      status: '',
      description: '',
      gitRepo: '',
      tags: [],
      image: '',
      userGuide: '',
      developerGuide: '',
      installationGuide: ''
  };

   handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

   handleImageUpdate = e => {
    //   console.log(e.target.files[0]
    if(this.state.image !== ""){
        axios.delete(`upload/${this.state.image}`)
        return null
    }
    var formData = new FormData();
    formData.append('cover-image', e.target.files[0])
      axios.post('upload/cover-image', formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => {
          console.log(res)
          this.setState({
              image: res.data.filename
          })
      })
      .catch(
      err => console.log(err)
    )
  }

  handleUserGuideUpdate = e => {
    if(this.state.userGuide !== ""){
        axios.delete(`upload/${this.state.userGuide}`)
        return null
    }
    var formData = new FormData();
    formData.append('user-guide', e.target.files[0])
      axios.post('upload/user-guide', formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => {
          console.log(res)
          this.setState({
              userGuide: res.data.filename
          })
      })
      .catch(
      err => console.log(err)
    )
  }

  handleDeveloperGuideUpdate = e => {
    if(this.state.developerGuide !== ""){
        axios.delete(`upload/${this.state.developerGuide}`)
        return null
    }
    var formData = new FormData();
    formData.append('developer-guide', e.target.files[0])
      axios.post('upload/developer-guide', formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => {
          console.log(res)
          this.setState({
              userGuide: res.data.filename
          })
      })
      .catch(
      err => console.log(err)
    )
  }

  handleInstallationGuideUpdate = e => {
    if(this.state.developerGuide !== ""){
        axios.delete(`upload/${this.state.developerGuide}`)
        return null
    }
    var formData = new FormData();
    formData.append('installation-guide', e.target.files[0])
      axios.post('upload/installation-guide', formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => {
          console.log(res)
          this.setState({
              userGuide: res.data.filename
          })
      })
      .catch(
      err => console.log(err)
    )
  }

  handleSelectChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleTagsAdd = newTag => {
      this.setState(
      { tags: [...this.state.tags, newTag] }
    )
  }
  handleTagsRemove = index => {
    const newTags = [...this.state.tags]
    newTags.splice(index, 1)
    this.setState({tags: newTags})
  }


  handleSubmit = e => {
  e.preventDefault();
    console.log(this.state)
  //  if (this.state.name.trim() && this.state.description.trim()) {
   //   this.props.onAddProject(this.state);
    //  this.handleReset();
    //}
  };

  handleReset = () => {
    this.setState({
      name: '',
      owner: '',
      ownerID: '',
      contactInfo: '',
      status: '',
      description: '',
      gitRepo: '',
      tags: [],
      image: '',
      userGuide: '',
      developerGuide: '',
      installationGuide: ''
    });
  };


    render() {
        return (
        <div className="form-div mx-auto col-md-7 mb-5">
            <Form>
                <h3>Edit Project</h3>

                <Form.Group className="form-group">
                    <div>
                    <label>Project Name*</label>
                    <input type="name" className="form-control" placeholder="Enter project name" name="name" onChange={ this.handleInputChange } required={true} value=""/>
                    </div>
                </Form.Group>

                <Form.Group>
                    <div>
                    <label>Owner Name*</label>
                    <input type="owner" className="form-control" placeholder="Enter owner name" name="owner" required={true} onChange={ this.handleInputChange }/>
                    </div>
                </Form.Group>

                 <Form.Group>
                    <div>
                    <label>Contact Information*</label>
                    <input type="contactInfo" className="form-control" placeholder="Enter contact information" name="contactInfo" required={true} onChange={ this.handleInputChange } value=""/>
                    </div>
                </Form.Group>

                <Form.Group className="mt-3">
                    <div>
                    <label>Status*</label>
                    <select className="form-control" id="status" required={true} value={this.state.status} onChange={this.handleSelectChange} >
                        <option value=""></option>
                        <option value="Active">Active</option>
                        <option value="Complete">Complete</option>
                        <option value="Pending">Pending</option>
                        </select>
                    </div>
                </Form.Group>

                <Form.Group>
                    <div>
                    <label>Description*</label>
                    <textarea className="form-control" id="description" rows="3" name="description" required={true} onChange={ this.handleInputChange }
                    value={ this.state.description }></textarea>
                    </div>
                </Form.Group>

                <Form.Group>
                    <div>
                    <label>Tags</label>
                    <FormText color = "muted">Press the "Enter" key to add a tag to your project.</FormText>
                    <InputTag placeholder="Add Tags" tags={this.state.tags} addTag={this.handleTagsAdd} removeTag={this.handleTagsRemove} />
                    </div>
                </Form.Group>

                <Form.Group>
                    <div>
                    <label>Github Link</label>
                    <input type="gitRepo" className="form-control" placeholder="Add github link" name="gitRepo" required={false} onChange={ this.handleInputChange } value={ this.state.gitRepo }/>
                    </div>
                </Form.Group>

                <Form.Group>
                    <div>
                    <label>Cover Image (.jpg or .png)</label>
                    <input type="file" className="form-control-file" id="cover-image" name="cover-image" accept=".png, .jpg" onChange={ this.handleImageUpdate }/>
                    </div>
                </Form.Group>

                <Form.Group>
                    <div>
                    <label>User Guide (PDF or MS doc)</label>
                    <input type="file" className="form-control-file" id="user-guide" name="user-guide" accept=".pdf, .doc, .docx, application/msword" onChange={ this.handleUserGuideUpdate }/>
                    </div>
                </Form.Group>

                <Form.Group>
                    <div>
                    <label>Developer Guide (PDF or MS doc)</label>
                    <input type="file" className="form-control-file" id="developer-guide" accept=".pdf, .doc, .docx, application/msword" name="developer-guide" />
                    </div>
                </Form.Group>

                <Form.Group className = "mb-5">
                    <div>
                    <label>Installation Guide (PDF or MS doc)</label>
                    <input type="file" className="form-control-file" id="installation-guide" accept=".pdf, .doc, .docx, application/msword" name="installation-guide" />
                    </div>
                </Form.Group>
                
                <Form.Group className = "form-buttons">
                    <Button type="submit">Submit</Button>
                    <Button variant="danger" type="button" onClick={ this.handleReset }>Reset</Button>
                </Form.Group>
            </Form>
        </div>
        )
    }

}

export default EditProfileListing;