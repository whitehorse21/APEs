
import RoadMapLeftMonkey from "../../assets/images/alpha/roadMap-left-monkey.svg";
import RoadMapRightMonkey from "../../assets/images/alpha/roadMap-right-monkey.svg";
import divider from "../../images/roadmap/divider.svg";

import { RoadmapContainer, Phase1, Phase2, Phase3, Phase4, RoadmapDivider,
  Phase5, Phase6, RoadmapContent } from "./roadmap.style";

const Roadmap = () => {
  return (
    <RoadmapContainer>
        <h2 className="title">Roadmap</h2>
        <RoadmapDivider src={divider} alt="divider" className="divider" />

        <img src={RoadMapLeftMonkey} alt="leftMonkey" className="roadMapLeftMonkey" />
        <div className="roadMap-gradient1" />
        <img src={RoadMapRightMonkey} alt="leftMonkey" className="roadMapRightMonkey" loading="lazy"/>
        <div className="roadMap-gradient2" />

        <Phase1>
          <RoadmapContent>
              <p className="roadMapSubTitle right">Phase 1</p>
              <p className="roadMapDescription right">Release the Alpha Apes, Marketing, Giveaways, Contests, events for the Community</p>
          </RoadmapContent>
              
        </Phase1>

        <Phase2>
          <RoadmapContent>
              <p className="roadMapSubTitle left">Phase 2</p>
              <p className="roadMapDescription left">Release the Fusion Apes</p>
          </RoadmapContent>
        </Phase2>

        <Phase3>
          <RoadmapContent>
              <p className="roadMapSubTitle right">Phase 3</p>
              <p className="roadMapDescription right">Airdrop Elementals Apes (Females) Merch Designs, Marketing, Web3</p>
          </RoadmapContent>
        </Phase3>

        <Phase4>
        <RoadmapContent>
              <p className="roadMapSubTitle left">Phase 4</p>
              <p className="roadMapDescription left">Tokenomics &amp; Ape-World  </p>
          </RoadmapContent>
        </Phase4>

        <Phase5>
          <RoadmapContent>
              <p className="roadMapSubTitle right">Phase 5</p>
              <p className="roadMapDescription right">Open the Lab. </p>
          </RoadmapContent>
        </Phase5>

        <Phase6>
          <RoadmapContent>
              <p className="roadMapSubTitle left">Phase 6</p>
              <p className="roadMapDescription left">Fusion Females? Fusion Mutants? It's a surprise.</p>
          </RoadmapContent>
        </Phase6>
        
      </RoadmapContainer> 
  )
}

export default Roadmap;