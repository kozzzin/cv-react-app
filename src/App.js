import logo from './logo.svg';
import './styles/App.css';
import ReadyCV from './components/ReadyCV';
import FormCV from './components/FormCV';
import React from 'react';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('saved')) || {
      name: 'LongEnoughName',
      surname: 'EvenLongerSurnameEvenLonger',
      site: 'www.domain.com',
      tel: '+390 345-78-90',
      email: 'mail@meplease.com',
      geo: 'New York, USA',
      about: 'Writing a book is an adventure. To begin with it is a toy and an amusement. Then it becomes a mistress, then it becomes a master, then it becomes a tyrant. The last phase is that just as you are about to be reconciled to your servitude, you kill the monster and fling him to the public. Why not?',
      career: [
        {
          id: uniqid(),
          companyName: 'Apple Inc.',
          position: 'Chairman Ceo',
          startDate: '2012',
          endDate: '2018',
          info: 'i\'m the one who you need',
        },
        {
          id: uniqid(),
          companyName: 'Pear Ltd.',
          position: 'Deputy President',
          startDate: '2018',
          endDate: 'present',
          info: 'co-founder and co-owner with a great expreience',
        }
      ],
      education: [
        {
          id: uniqid(),
          degree: 'BS in bachelor sciences',
          institution: 'School of Life',
          startDate: '2013',
          endDate: '2015',
          info: 'The one and only education you want to get',
        },
        {
          id: uniqid(),
          degree: 'MD in master degrees',
          institution: 'Univercity of Degrees',
          startDate: '2015',
          endDate: '2019',
          info: 'Oh, it gave me everything you could dream',
        }
      ],
      skills: 'Eat no meat, drink water without sparkles, speaking 5 languages, being honest'
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.printHandler = this.printHandler.bind(this);
  }

  saveHandler(event) {
    event.preventDefault();
    localStorage.setItem('saved',JSON.stringify(this.state));
  }
  
  printHandler(event) {
    event.preventDefault();
    window.print();
  }

  changeHandler(event) {
    console.log(event.target.name);
    console.log(event.target.value);

    if (event.target.parentNode.id) {
      console.log(event.target.parentNode.id);

      this.setState(
        (oldState) => {
          const updatedArray = [...oldState[event.target.parentNode.name]];
          const updatedElement = updatedArray.find(el => el.id === event.target.parentNode.id);
          updatedElement[event.target.name] = event.target.value;
          return {
            ...oldState,
            [event.target.parentNode.name]: updatedArray,
          }
        }
      );
      return;
    }

    this.setState(
      (oldState) => {
        return {
          ...oldState,
          [event.target.name]: event.target.value,
        }
      }
    );
  }

  deleteHandler(event) {
    event.preventDefault();
    this.setState(
      (oldState) => {
        const updatedArray = [...oldState[event.target.parentNode.name]];
        const deletedIndex = updatedArray.findIndex(el => el.id === event.target.parentNode.id);
        console.log('index', deletedIndex);
        updatedArray.splice(deletedIndex,1);
        console.log(updatedArray);
        return {
          ...oldState,
          [event.target.parentNode.name]: updatedArray,
        }
      }
    );
  }

  updateArray(updatedArray, arrayName) {
    let newCard = {};
    if (arrayName === 'career') {
      newCard = {
        id: uniqid(),
        companyName: 'Company',
        position: 'Position',
        startDate: 'From: 2021',
        endDate: 'To: 2022 or present',
        info: 'Some kind of useful information',
      };
    } else if (arrayName === 'education') {
      newCard = {
        id: uniqid(),
        degree: 'Degree',
        institution: 'Institution',
        startDate: 'From: 2021',
        endDate: 'To: 2022 or present',
        info: 'Some kind of useful information',
      };
    }

    updatedArray.push(
      newCard
    );
  }

  addHandler(event) {
    event.preventDefault();
    this.setState(
      (oldState) => {
        const arrayName = event.target.name;
        const updatedArray = [...oldState[arrayName]];
        this.updateArray(updatedArray, arrayName);
        return {
          ...oldState,
          [arrayName]: updatedArray,
        } 
      }
    )
  }

  render() {
    return (
      <div className="App">
      <h1>Make your CV today</h1>
        <div className='cv-app-container'>
          <div className='cv-form-container'>
            <FormCV
              data = { this.state }
              changer = { this.changeHandler }
              delete = { this.deleteHandler }
              add = { this.addHandler }
              save = { this.saveHandler }
              print = { this.printHandler }
            />
          </div>
          <div className='cv-result-container'>
            <ReadyCV
              data = { this.state }
            /> 
          </div>
        </div>
  
      </div>
    );
  }

}

export default App;