import React from 'react';
import './App.css';

const size_x = 100

interface IProps {
}

interface IState {
    jsonVersion?: string[],
    innerHTML?: string;
}

class Line extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        const base_array: string[] = Array.from({length: 100}, (_) => "█")// ["█"]
        this.state = {
            jsonVersion: base_array,
            innerHTML: base_array.join("")// "█".repeat(size_x)
        };
    }


    replaceOnceAt(at: number, char: string){
        this.setState({innerHTML: this.state.innerHTML?.substring(0, at) + char + this.state.innerHTML?.substring(at+1)})
    }
    render() {
        return <div>
            <span>{this.state.innerHTML}</span>
        </div>
    }
}

function App() {
    return (
    <div className="App">
      <pre id="content">
          {[...Array(100)].map((element: undefined,index: number) => {
              return <Line key={index} />
          })}
      </pre>
        {/*<pre id="chat"></pre>*/}
        {/*<pre id="map"></pre>*/}
        <pre id="footer">ArkanYota SAO <a href="https://github.com/ARKANYOTA/">GITHUB</a></pre>
    </div>
  );
}

export default App;
