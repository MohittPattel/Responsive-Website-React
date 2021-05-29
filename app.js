import "./styles.css";

export default function App() {
  return (
    <div>
    <div style={{padding: "5px", backgroundColor: "yellow"}}>
        <h2 style={{textAlign: "center"}}>Resize the windpow to see the effect of the website</h2>
    </div>

    <div class="header">
        <h1>Header</h1>
    </div>

    <div class="navbar">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
    </div>

    <div class="row">
        <div class="side">
            <div class="fackimg" style={{height: "200px"}}>image 1</div>
            <h2>About me</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisi</p><br/>
            <div class="fackimg" style={{height: "60px"}}>image 2</div><br/>
            <div class="fackimg" style={{height: "60px"}}>image 3</div><br/>
            <div class="fackimg" style={{height: "60px"}}>image 4</div>
        </div>
        <div class="main">
            <h1>Main Heading</h1>
            <div class="fackimg" style={{height: "200px"}}>image 34</div>
            <p>lorem fjoifn fsjog   igjig v  jgo o irj jg erjoijj</p>
            <div class="fackimg" style={{height: "200px"}} >image 4</div>
            <p>Aboiut the image fsduihfui  fuhdiu g heg hj wfghriu h erhfh</p>
        </div>
    </div>

    <div class="footer">
        <h2>Footer</h2>
    </div></div>
  );
}
