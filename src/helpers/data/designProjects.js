import Abbie from '../../images/Nightshade/LeadershipGraphics/Abbie.png'
import Ryan from '../../images/Nightshade/LeadershipGraphics/Ryan.png'
import Lauren from '../../images/Nightshade/LeadershipGraphics/Lauren.png'
// import LaurenCaptain from '../../images/Nightshade/LeadershipGraphics/LaurenCaptain.png'
import Daniel from '../../images/Nightshade/LeadershipGraphics/Daniel.png'
import Amy from '../../images/Nightshade/LeadershipGraphics/Amy.png'
import Liz from '../../images/Nightshade/PlayerGraphics/Liz.png'
import Claire from '../../images/Nightshade/PlayerGraphics/Claire.png'
import Colleen from '../../images/Nightshade/PlayerGraphics/Colleen.png'
import Abbey from '../../images/Nightshade/PlayerGraphics/Abbey.png'
import LaurenPlayer from '../../images/Nightshade/PlayerGraphics/Lauren.jpg'
import CoachingOpportunity from '../../images/Nightshade/GeneralAnnouncements/CoachingOpportunity.png'
import FundraisingGoal from '../../images/Nightshade/GeneralAnnouncements/FundraisingGoal.png'
import OpenPositions from '../../images/Nightshade/GeneralAnnouncements/OpenPositions.png'
import TryoutSignUp from '../../images/Nightshade/GeneralAnnouncements/TryoutSignUp.png'
import ThrowShade from '../../images/Nightshade/GeneralAnnouncements/ThrowShade.png'
import OpenTryout from '../../images/Nightshade/GeneralAnnouncements/OpenTryout.png'
import OpenTryout1 from '../../images/Nightshade/GeneralAnnouncements/OpenTryout1.png'
import OpenTryout2 from '../../images/Nightshade/GeneralAnnouncements/OpenTryout2.png'

const projects = [
  {
    title: `Nashville Nightshade`,
    type: 'Sports Graphics & Social Media Content',
    company: `Nashville Nightshade is a womxn's professional ultimate frisbee team.`,
    description: `I assisted with rebranding, designed graphics to highlight player stats, and created social media content for game announcements, tryout information, and open positions.`,
    role: '',
    designs: [
      TryoutSignUp,
      OpenTryout2,
      CoachingOpportunity,
      ThrowShade,
      OpenTryout1,
      OpenPositions,
      FundraisingGoal,
      OpenTryout,
    ],

    projects: [
      {
        project: 'Leadership Announcements',
        designs: [
          {
            image: Abbie,
            width: '1',
            height: '1',
          },
          {
            image: Ryan,
            width: '2',
            height: '2',
          },
          {
            image: Lauren,
            width: '1',
            height: '1',
          },
          {
            image: Daniel,
            width: '2',
            height: '2',
          },
          {
            image: Amy,
            width: '1',
            height: '1',
          },
          // {
          //   image: LaurenCaptain,
          //   width: '2',
          //   height: '2',
          // },
        ],
      },
      {
        project: 'Player Graphics',
        designs: [Liz, Colleen, Claire, LaurenPlayer, Abbey],
      },
      {
        project: 'General Announcements',
        designs: [
          {
            image: TryoutSignUp,
            width: '1',
            height: '1',
          },
          {
            image: OpenTryout2,
            width: '4',
            height: '2',
          },
          {
            image: CoachingOpportunity,
            width: '2',
            height: '2',
          },
          {
            image: ThrowShade,
            width: '1',
            height: '1',
          },
          {
            image: OpenTryout1,
            width: '3',
            height: '2',
          },
          {
            image: OpenPositions,
            width: '1',
            height: '1',
          },
          {
            image: FundraisingGoal,
            width: '3',
            height: '2',
          },
          {
            image: OpenTryout,
            width: '3',
            height: '2',
          },
        ],
        // Original order
        // designs: [TryoutSignUp, CoachingOpportunity, ThrowShade, OpenTryout2, OpenTryout1, FundraisingGoal, OpenTryout, OpenPositions],
      },
    ],
  },
  {
    title: `That Legendary Play`,
    type: 'Company Graphics & Logo Design',
    company:
      'That Legendary Play is a sports print retailer that offers prints and other media displaying legendary sports plays and diagrams.',
    description:
      'I designed their logo and layout for their graphics. I created their initial handful of graphics representing unforgettable plays in football.',
  },
  {
    title: `The Rodgers Group`,
    type: 'Logo Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
  },
]

export default projects
