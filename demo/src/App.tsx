import Magnifier from "../../lib/components/Magnifier"; // Path correcto
import "./App.css";

import img1 from "./assets/images/img_1.jpg";
import img2 from "./assets/images/img_2.jpg";
import img3 from "./assets/images/img_3.jpg";
import img4 from "./assets/images/imgBig_3.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Magnifier Component Demo</h1>
        <p>Hover over the images to see the magnification effect</p>
      </header>

      <main className="demo-content">
        <section className="demo-section">
          <h2>Basic Example</h2>
          <div className="demo-item">
            <div>
              <Magnifier
                src={img1}
                alt="Mountain landscape"
                magnifierSize={200}
                zoomLevel={2}
              />
            </div>
            <div className="demo-description">
              <p>Basic magnifier with default settings</p>
              <ul>
                <li>Magnifier size: 200px</li>
                <li>Zoom level: 2x</li>
                <li>Default hover message</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>Large Magnifier</h2>
          <div className="demo-item">
            <div>
              <Magnifier
                src={img2}
                alt="Forest path"
                magnifierSize={300}
                zoomLevel={3}
                hoverMessage="Zoom in to explore!"
              />
            </div>
            <div className="demo-description">
              <p>Larger magnifier with higher zoom level</p>
              <ul>
                <li>Magnifier size: 300px</li>
                <li>Zoom level: 3x</li>
                <li>Custom hover message</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>High Resolution Source</h2>
          <div className="demo-item">
            <div>
              <Magnifier
                src={img3}
                largeSrc={img4}
                alt="Mountain landscape HD"
                magnifierSize={250}
                zoomLevel={2.5}
                hoverMessage="High-res magnification"
              />
            </div>
            <div className="demo-description">
              <p>Using separate high-resolution source for magnification</p>
              <ul>
                <li>Display image: Lower resolution for fast loading</li>
                <li>Magnifier source: High resolution for detailed view</li>
                <li>Zoom level: 2.5x</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>Installation & Usage</h2>
          <div className="code-section">
            <h3>Install</h3>
            <pre>
              <code>npm install react-magnifier-view</code>
            </pre>

            <h3>Basic Usage</h3>
            <pre>
              <code>{`import { Magnifier } from 'react-magnifier-view';

function MyComponent() {
  return (
    <Magnifier
      src="path/to/your/image.jpg"
      alt="Description"
      magnifierSize={200}
      zoomLevel={2}
      hoverMessage="Hover to magnify"
    />
  );
}`}</code>
            </pre>

            <h3>Advanced Usage</h3>
            <pre>
              <code>{`import { Magnifier } from 'react-magnifier-view';

function MyComponent() {
  return (
    <Magnifier
      src="small-image.jpg"
      largeSrc="high-res-image.jpg"
      alt="High resolution example"
      magnifierSize={300}
      zoomLevel={3}
      hoverMessage="Explore in detail"
      containerClassName="my-container"
      imageClassName="my-image"
    />
  );
}`}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
