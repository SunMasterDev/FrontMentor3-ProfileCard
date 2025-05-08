import patternCard from '../../assets/images/bg-pattern-card.png'
import profileImg from '../../assets/images/image-victor.jpg'
import { Card, CardContent, CardFooter } from '../ui/card'

const CardProfile = () => {
    const stats = [
        { label: 'Followers', value: '80K' },
        { label: 'Likes',    value: '803K' },
        { label: 'Photos',   value: '1.4K' },
      ];
    
  return (
    <Card className="w-[350px] rounded-2xl overflow-hidden shadow-lg p-0 z-10">
        {/* Header Background */}
        <div className='relative h-40 w-full'>
          <img
            src={patternCard}
            alt="Card background pattern"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Avatar */}
        <div className='absolute left-1/2 top-full transform 
        -translate-x-1/2 -translate-y-1/2'>
            <img src={profileImg} alt="" 
            className='w-20 h-20 rounded-full 
            border-[5px] border-white'/>
        </div>
        </div>
        
        <CardContent className="pt-16 text-center">
          <h2 className="text-lg font-bold text-gray-800">
            Victor Crest <span className="font-normal text-gray-500">26</span>
          </h2>
          <p className="text-sm text-gray-500">London</p>
        </CardContent>
        <div className="h-px bg-gray-200 w-full" />
        <CardFooter className="pt-4">
          <div className="flex justify-around py-4 text-center w-full">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center flex-1">
                <p className="font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardFooter>
    </Card>
  )
}
export default CardProfile