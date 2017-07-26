var React = require('react')
var Child = require('./Child')

var Parent = React.createClass({
    submit: function(event) {
        event.preventDefault();
        var topic = document.getElementById('topic').value;
        console.log(topic);
    },

    render: function() {
        return (
            <div className='container'>  
                <div className='page-header text-center'>
                    <h1>New York Times</h1>
                </div>
                <div className='container'>
                    <form>
                        <div className='form-group row'>
                            <label className='col-2 col-form-label'>Topic</label>
                            <div className='col-10'>
                                <input className='form-control' type='text' id='topic' />
                            </div>
                            <label className='col-2 col-form-label'>Start Year</label>
                            <div className='col-10'>
                                <input className='form-control' type='text' id='start' />
                            </div>
                            <label className='col-2 col-form-label'>End Year</label>
                            <div className='col-10'>
                                <input className='form-control' type='text' id='end' />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary" id='submit' onClick={this.submit}>Submit</button>
                        </div> 
                    </form>
                </div>
                <Child />
            </div>
        ); 
    }
});

module.exports = Parent;
