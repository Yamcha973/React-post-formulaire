import React, { Component } from 'react';
import axios from 'axios';

class FormMovies extends Component {
    constructor(props){
    super(props);
    this.state = {
        title: '',
        poster: '',
        comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    submitForm(e) {
        e.preventDefault();
        const url =  "https://post-a-form.herokuapp.com/api/movies/";
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
            alert(`Votre film a bien été enregistrer ${res.id}`);
        })
        .catch(e => {
            console.error(e);
            alert(`Veuillez remplir tout les champs : ${e.message}`);
        });
    }
    render() {
        return(
            <div className="FormMovies">
                <h1>Saisie d'un film</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-data">
                        <label htmlFor="title">Titre du film</label>
                        <input type="text" id="title" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div className="form-data">
                        <label htmlFor="poster">Url du film</label>
                        <input type="text" id="poster" name="poster" onChange={this.onChange} value={this.state.poster} />
                    </div>
                    <div className="form-data-comment">
                        <label>Commentaires :
                        <textarea value={this.state.comment} onChange={this.onChange} />
                        </label>
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        );
    };
}


export default FormMovies;