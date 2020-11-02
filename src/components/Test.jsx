import React, { Component } from 'react';
import Results from "./Results";
export default class test extends Component {

constructor(){
    super()
    this.state={
        berg:{},
        showResults:false
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.submit=this.submit.bind(this);
}

reset (){
    window.location.href ='/'
}

    handleInputChange(event) {
        const target = event.target;
        console.log(target)
        let value = target.value;
        console.log(value)
        let name = target.name;
        console.log(name)
        
        this.state.berg[name] = parseInt(value);
      
        
    };

    submit(event){


        event.preventDefault()
        this.setState({shownResults: true})
        //console.log(this.state)
        let total= this.state.berg.score + this.state.berg.score1 + this.state.berg.score2 + this.state.berg.score3 + this.state.berg.score4 + this.state.berg.score5 + this.state.berg.score6 + this.state.berg.score7+this.state.berg.score8 + this.state.berg.score9+this.state.berg.score10 +this.state.berg.score11 +this.state.berg.score12 +this.state.berg.score13 
        console.log(total)
        // this.state.sitting = sitting
        this.setState({total: total})
     

       
        setTimeout(function(){
            document.getElementById("answer").scrollIntoView();
            console.log("Happy")
        },500
        );
        
    }

    render() {
        return(

        <div id = "test">
            <div className= "heading">
            <h2> Berg Fuctional Balance</h2>
            <h6>(Adapted from Berg, K., Wood-Dauphine, S.L. and Williams, J.L. Measuring balance in the elderly: validation of an instrument. Can. J. Public Health, 83(S2): S7-S11, 1992.)</h6><br></br>
            </div>
                                                    
            <form  onSubmit={this.submit}>
                <div className="container">
                <div className="row">
                <div className="col">

            <span><b>1. Sit to Stand</b><br />
            <i>Instruction: Please stand up. Try not to use your hands for support.</i></span><br />
            <label><input type="radio" id="leans" className="option-input radio" name="score" value="4" onChange={this.handleInputChange} required/>
            (4) able to stand, no hands and stabilize indep</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score" value="3" onChange={this.handleInputChange} />
            (3) able to stand indep using hands</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score" value="2" onChange={this.handleInputChange} required/>
            (2) able to stand using hands after several tries</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score" value="1" onChange={this.handleInputChange} />
            (1) needs min assist to stand or to stabilize</label><br />

            <label> <input type="radio" id="safe"className="option-input radio"  name="score" value="0" onChange={this.handleInputChange} />
            (0) needs mod to max assist to stand</label><br />


            <br /><span><b>2. Standing unsupported</b><br />
            <i>Instruction: Stand for two minutes without holding.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio"name="score1" value="4" onChange={this.handleInputChange} required/>
            (4) able to stand safely 2 min </label><br />

            <label> <input type="radio" id="safe" className="option-input radio"name="score1" value="3" onChange={this.handleInputChange} />
            (3) able to stand 2 min with supervision</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score1" value="2" onChange={this.handleInputChange} required/>
            (2) able to stand 30 sec unsupported</label><br />

            <label> <input type="radio" id="safe" className="option-input radio"name="score1" value="1" onChange={this.handleInputChange} />
            (1) needs several tries to stand 30 sec unsupported</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score1" value="0" onChange={this.handleInputChange} />
            (0) unable to stand 30 sec unassisted</label><br />

            <h6>IF SUBJECT IS ABLE TO STAND 2 MINUTES SAFELY, SCORE FULL MARKS FOR SITTING
                    UNSUPPORTED. PROCEED TO POSITION CHANGE STANDING TO SITTING</h6>


            <br /><span><b>3. Sitting unsupported feet on floor.</b><br />
            <i>Instruction: Sit with arms folded for 2 min</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score2" value="4" onChange={this.handleInputChange} required/>
            (4)  able to sit safely and securely 2 min</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score2" value="3" onChange={this.handleInputChange} />
            (3) able to sit 2 min under supervision</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score2" value="2" onChange={this.handleInputChange} required/>
            (2) able to sit 30 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score2" value="1" onChange={this.handleInputChange} />
            (1) able to sit 10 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score2" value="0" onChange={this.handleInputChange} />
            (0) unable to sit w/o support 10 sec</label><br />


            <br /><span><b>4. Standing to sitting.</b><br />
            <i>Instruction: Please sit down.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score3" value="4" onChange={this.handleInputChange} required/>
            (4) sits safely with min use of hands</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score3" value="3" onChange={this.handleInputChange} />
            (3) controls descent by using hands</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score3" value="2" onChange={this.handleInputChange} required/>
            (2) uses back of legs against chair to control descent</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score3" value="1" onChange={this.handleInputChange} />
            (1) sits indep but has uncontrolled descent</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score3" value="0" onChange={this.handleInputChange} />
            (0) needs assistto sit</label><br />

            <br /><span><b>5. Transfers</b><br />
            <i>Instruction: Please move from chair or bed and back again. One way toward a seat with armrests and one way toward a seat without arm rests.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score4" value="4" onChange={this.handleInputChange} required/>
            (4) able to transfer safely with min use of hands</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score4" value="3" onChange={this.handleInputChange} />
            (3) able to transfer definite need of hands</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score4" value="2" onChange={this.handleInputChange} required/>
            (2) able to transfer with VC and/or supervision</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score4" value="1" onChange={this.handleInputChange} />
            (1) needs one person to assis</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score4" value="0" onChange={this.handleInputChange} />
            (0) needs 2 people to assist or supervise to be safe</label><br />

            <br /><span><b>6. Standing unsupported with eyes closed</b><br />
            <i>Instruction: Close your eyes and stand still for 10 seconds.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score5" value="4" onChange={this.handleInputChange} required/>
            (4) able to stand 10 sec safely</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score5" value="3" onChange={this.handleInputChange} />
            (3) able to stand 10 sec with supervision</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score5" value="2" onChange={this.handleInputChange} required/>
            (2) able to stand 3 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score5" value="1" onChange={this.handleInputChange} />
            (1) unable to keep eyes closed 3 sec but stays steady</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score5" value="0" onChange={this.handleInputChange} />
            (0) needs help to keep from falling</label><br />

            <br /><span><b>7. Standing unsupported with feet together.</b><br />
           <i>Instruction: Place your feet together and stand without holding.</i></span><br />
         
           <label> <input type="radio" id="leans" className="option-input radio" name="score6" value="4" onChange={this.handleInputChange} required/>
            (4) place feet together indep and stand 1 min safely</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score6" value="3" onChange={this.handleInputChange} />
            (3) place feet together indep and stand 1 min with supervision</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score6" value="2" onChange={this.handleInputChange} required/>
             (2) feet together indep but unable to hold for 30 sec</label><br />

             <label> <input type="radio" id="safe" className="option-input radio" name="score6" value="1" onChange={this.handleInputChange} />
            (1) needs help to attain position; stand 15sec feet together</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score6" value="0" onChange={this.handleInputChange} />
            (0) needs help to attain position; unable to hold for 15sec</label><br />

            <h5>THE FOLLOWING ITEMS ARE TO BE PERFORMED WHILE STANDING UNSUPPORTED.</h5>

            <br /><span><b>8. Reaching forward with outstretched arms.</b><br />
           <i>Instruction: Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can.</i></span><br />
         
           <label> <input type="radio" id="leans" className="option-input radio" name="score7" value="4" onChange={this.handleInputChange} required/>
            (4) can reach forward confidently >10"</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score7" value="3" onChange={this.handleInputChange} />
            (3) can reach forward >5"</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score7" value="2" onChange={this.handleInputChange} required/>
            (2) reaches forward but needs supervision</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score7" value="1" onChange={this.handleInputChange} />
            (1) reaches forward but needs supervision</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score7" value="0" onChange={this.handleInputChange} />
            (0) Loses balance while trying/requires support</label><br />

            <br /><span><b>9. Pick up object from the floor.</b> <br />
            <i>Instruction: Pick up the shoe/slipper which is placed in front of your feet.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score8" value="4" onChange={this.handleInputChange} required/>
            (4) able to pick up slipper safely and easily</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score8" value="3" onChange={this.handleInputChange} />
            (3) able to pick up slipper but needs supervision</label><br />
          
            <label><input type="radio" id="leans" className="option-input radio" name="score8" value="2" onChange={this.handleInputChange} required/>
            (2) unable to pickup; reaches 1-2" from slipper/keeps balance indep</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score8" value="1" onChange={this.handleInputChange} />
            <label >(1) unable to pick up/needs supervision while trying</label><br />

            <input type="radio" id="safe" className="option-input radio" name="score8" value="0" onChange={this.handleInputChange} />
            (0) unable to try/needs assist to keep from falling</label><br />

            <br /><span><b>10. Turning to look behind/over left and right shoulders.</b><br />
            <i>Instruction:  Turn to look behind you over/toward your left shoulder. Repeat to the right.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score9" value="4" onChange={this.handleInputChange} required/>
            (4) looks behind from both sides/weight shifts well</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score9" value="3" onChange={this.handleInputChange} />
            (3) looks behind 1 side; other side shows less weight shift</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score9" value="2" onChange={this.handleInputChange} required/>
            (2) turns sideways only but maintains balance</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score9" value="1" onChange={this.handleInputChange} />
            (1) needs supervision when turning</label><br />

            <input type="radio" id="safe" className="option-input radio" name="score9" value="0" onChange={this.handleInputChange} />
            <label >(0) needs assist to keep from falling</label><br />


            <br /><span><b>11. Turn 360 degrees</b><br />
            <i>Instruction: Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score10" value="4" onChange={this.handleInputChange} required/>
            (4) able to turn 360 safely in 4 sec each side</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score10" value="3" onChange={this.handleInputChange} />
            (3) able to turn 360 safely one side only in 4 sec</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score10" value="2" onChange={this.handleInputChange} required/>
            (2) able to turn 360 safely but slowly</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score10" value="1" onChange={this.handleInputChange} />
            (1) needs close supervision or verbal cueing</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score10" value="0" onChange={this.handleInputChange} />
            (0) needs assistance while turning</label><br />

            
            <h5>DYNAMIC WEIGHT SHIFTING WHILE STANDING UNSUPPORTED.</h5>

            <br /><span><b>12.Count number of times step touch measured stool</b><br />
            <i>Instruction: Place each foot alternately on the stool. Continue until each foot has touched the stool four times.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score11" value="4" onChange={this.handleInputChange} required/>
            (4) stands indep/safely; completes 8 steps in 20 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score11" value="3" onChange={this.handleInputChange} />
            (3) stands indep and complete 8 steps in >20 sec</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score11" value="2" onChange={this.handleInputChange} required/>
            (2) able to complete 4 steps w/o aid with supervision</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score11" value="1" onChange={this.handleInputChange} />
            (1) able to complete >2 steps needs min assist</label><br />

            <input type="radio" id="safe" className="option-input radio" name="score11" value="0" onChange={this.handleInputChange} />
            <label >(0) needs assist to keep from falling/unable to try</label><br />

            <br /><span><b>13. Standing unsupported, one foot in front </b> <br />
            <i>Instruction: (Demonstrate to subject) Place one foot directly in front of the other. If you feel that you cannot your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot.).</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score12" value="4" onChange={this.handleInputChange} required/>
            (4) able to place foot tandem indep and hold 30 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score12" value="3" onChange={this.handleInputChange} />
            (3) able to place foot ahead of other indep/hold 30 sec</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score12" value="2" onChange={this.handleInputChange} required/>
            (2) able to take small step indep/hold 30 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score12" value="1" onChange={this.handleInputChange} />
            (1) needs help to step but can hold 15 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score12" value="0" onChange={this.handleInputChange} />
            (0) needs assistance to keep from falling/unable to try</label><br />

            <br /><span><b>14.Standing on one leg </b> <br />
            <i>Instruction: Stand on one leg as long as you can without holding.</i></span><br />
         
            <label> <input type="radio" id="leans" className="option-input radio" name="score13" value="4" onChange={this.handleInputChange} required/>
            (4)able to lift leg indep and hold >10 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score13" value="3" onChange={this.handleInputChange} />
            (3)able to lift leg indep and hold 5-10 sec</label><br />
          
            <label> <input type="radio" id="leans" className="option-input radio" name="score13" value="2" onChange={this.handleInputChange} required/>
            (2)able to lift leg indep and hold = or >3 sec</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score13" value="1" onChange={this.handleInputChange} />
            (1) tries to lift leg; unable to hold 3 sec/remains standing indep</label><br />

            <label> <input type="radio" id="safe" className="option-input radio" name="score13" value="0" onChange={this.handleInputChange} />
            (0) unable to try or needs assist to prevent fall</label><br /><br />

            <div className="form-row">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary">Submit</button> <span>&nbsp;</span>
                             
                               <button onClick= {this.reset} type="reset" className="btn btn-primary">Clear</button>
                           </div> 
                            
            </div>
            </div>
            </div>
            </div>
               <br />
            </form>
            {(this.state.shownResults===true) ?       
        <Results 
          totalscore={this.state.total}/> : ''}
        
        </div>

        )
     
    }
        
}