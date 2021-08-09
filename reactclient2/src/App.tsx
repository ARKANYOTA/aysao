import React from 'react';
import './App.css';

interface IProps {
}
/*
interface IState {
    jsonVersion?: string[],
    innerHTML?: string;
}*/
/*
class Line extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const base_array: string[] = Array.from({length: 100}, (_) => "█")// ["█"]
        this.state = {
            jsonVersion: base_array,
            innerHTML: base_array.join("")// "█".repeat(size_x)
        };
    }


    replaceOnceAt(at: number, char: string) {
        this.setState({innerHTML: this.state.innerHTML?.substring(0, at) + char + this.state.innerHTML?.substring(at + 1)})
    }

    render() {
        return <div>
            <span>{this.state.innerHTML}</span>
        </div>
    }
}
*/
function getWindowsDimensions(){
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    }
}

function setMapSize(){
    const size = getWindowsDimensions()
    let size_x: number
    let size_y: number
    return {size_x: 100, size_y: 30}
}

class Map extends React.Component <IProps, { map: string[][] }> {
    constructor(props: any) {
        super(props);
        const size = setMapSize()
        this.state = {
            map: Array.from({length: size.size_y}, (_) => Array.from({length: size.size_x}, (_) => "█"))
        }// ["█"]
    }

    render() {
        console.log(getWindowsDimensions())
        return <div>
            {this.state.map.map(
                (items: string[], index) => {
                    return <React.Fragment key={index}><span>
                        {
                            items.map(
                                (item, in_index) => {
                                    return <span key={index + "" + in_index}>{item}</span>
                                }
                            )
                        }
                    </span><br/>
                    </React.Fragment>
                }
            )}
        </div>
    }
}

function App() {
    return (
        <div className="App">
      <pre id="content">
          {/*[...Array(100)].map((element: undefined,index: number) => {
              return <Line key={index} />
          })*/}
          <Map/>
      </pre>
            {/*<pre id="chat"></pre>*/}
            {/*<pre id="map"></pre>*/}
            <pre id="footer">ArkanYota SAO <a href="https://github.com/ARKANYOTA/">GITHUB</a></pre>
        </div>
    );
};

export default App;
