import React, { Component } from 'react';
import ToDoList from "./ToDoList";
import Header from "./Header";
import SearchField from "./SearchField";
import AddToDoTaskForm from "./AddToDoTaskForm";
import ItemStatusFilter from "./ItemStatusFilter";
import './App.css'

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createToDoItem('Learn React'),
            this.createToDoItem('Build awesome app'),
            this.createToDoItem('Be pro frontend dev!'),
            this.createToDoItem('Have lunch'),
        ],
        term: '',
        filteringStatus: 'all'
    };

    componentDidMount() {
        this.initCopyData()
    }

    initCopyData = () => {
        this.setState(({todoData}) => {
            return {
                todoDataCopy: [...todoData]
            }
        })
    };

    createToDoItem(text, filterStatus){
        switch (filterStatus) {
            case 'status':
                return {label: text, status: true, important: false, id: this.maxId++};
            case 'important':
                return {label: text, status: false, important: true, id: this.maxId++};
            default:
                return {label: text, status: false, important: false, id: this.maxId++};
        }

    }

    onToggleProperty = (targetPropertyName, id) => {
        this.setState({
            todoData: [
                ...this.state.todoData.map(el => {
                    return el.id === id ?
                        {...el, [targetPropertyName]: !el[targetPropertyName]} :
                        {...el};
                })
            ]}, () => {
                this.initCopyData();
            }
        );
    };

    onToggleStatus = (id) => {
        this.onToggleProperty('status', id);
    };

    onToggleImportant = (id) => {
        this.onToggleProperty('important', id);
    };

    onDelete = (id) => {
        this.setState(({todoData}) => {
            return { todoData: todoData.filter(el => el.id !== id) }
        }, () => {
            this.initCopyData();
        })
    };

    onAdded = (data) => {
        this.setState(({todoData}) => {
            return { todoData: [...todoData, this.createToDoItem(data, this.state.filteringStatus)] }
        }, () => {
            this.initCopyData();
        } );
    };

    search = (items, term) => {
        if (term === ''){
            return items;
        }

        return items.filter((el) => {
            return el.label.toLowerCase().includes(term.toLowerCase());
        })
    };

    onSearch = (term) => {
        this.setState( { term } );
    };

    filteredData = (items, propertyFilter) => {
        if(propertyFilter === 'all') {
            return items;
        }

        return items.filter(el => {
            return el[propertyFilter] === true;
        })
    };

    onFiltering = (propertyFilter) => {
        this.setState(() => {
            return {filteringStatus: propertyFilter}
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        const {todoData, term, filteringStatus} = this.state;
        const doneCount = todoData.filter(el => el.status === true).length;
        const importantCount = todoData.filter(el => el.status !== true).length;
        const filteringTodoData = this.filteredData(this.search(todoData, term), filteringStatus);


        return (
            <div className='container'>
                <div className="row align-items-center justify-content-center">
                    <div className="col col-10 col-lg-6">
                        <Header
                            done={doneCount}
                            onQueue={importantCount}
                        />
                        <form
                            className='todo-search-input'
                            onSubmit={this.onSubmit}>
                            <div className="input-group ">
                                <SearchField onSearch={this.onSearch}/>
                                <ItemStatusFilter onFiltering={this.onFiltering} />
                            </div>
                        </form>
                        <ToDoList
                            todos={filteringTodoData}
                            onDelete={this.onDelete}
                            onToggleStatus={this.onToggleStatus}
                            onToggleImportant={this.onToggleImportant}/>
                        <AddToDoTaskForm onAdded={this.onAdded}/>
                    </div>
                </div>
            </div>
        )
    }
}