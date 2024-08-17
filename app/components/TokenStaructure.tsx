import { FaEthereum , FaBitcoin } from "react-icons/fa";
import { SiBinance , SiRipple } from "react-icons/si";
import { SiTether } from "react-icons/si";


export default function OurToken() {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-[#F54180] via-[#C20E4D] to-[#920B3A] pt-6 text-white rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="p-8 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Token Structure</h2>
        <p className="mb-6">Our token structure ensures transparency, fairness, and value. Join us in revolutionizing the digital economy.</p>
        <h3 className="text-xl font-semibold mb-4">We accept:</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { Icon: FaBitcoin, name: 'Bitcoin' },
            { Icon: FaEthereum, name: 'Ethereum' },
            { Icon: SiTether, name: 'USD Tether' },
            { Icon: SiRipple, name: 'Ripple' },
            { Icon: SiBinance, name: 'Binance Chain wallet' },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white/20">
              <Icon className="w-6 h-6" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 md:w-1/2 flex flex-col justify-between relative">
      <div className="grid grid-cols-3 gap-4 mb-3">
  {['PRE-SALE', 'SOFT CAP', 'BONUS'].map((item, index) => (
    <div key={item} className="text-center relative">
      <h3 className="font-semibold mb-7">{item}</h3> {/* Add margin-bottom to create space for the line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
        <div className="w-1 h-6 bg-[#ffffffff]"></div> {/* Adjust width, height, and color */}
      </div>
    </div>
  ))}
</div>
        <div className="mb-6 relative">
          <div className="h-4 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ffffffff] transition-all duration-1000 ease-out"
              style={{ width: '1%' }}
            ></div>
          </div>
          <div className="absolute top-0 w-full h-1 bg-white/20" style={{ left: 0, transform: 'translateY(-100%)' }}></div>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold mb-2">70 target raised</p>
          <p className="text-lg">1 ETH = $1000 = 3177.38 CIC</p>
        </div>
      </div>
    </div>
  )
}
