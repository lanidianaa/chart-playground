import GoalLineChart from '@/components/goalLine'

const GoalLine = () => {
  const dataFromServer = [10, null, null, null, 50]
  const max = dataFromServer.reduce((a, b) => Math.max(a, b))

  const data = {
    labels: ['Jan', 'Apr', 'Jul', 'Oct', 'Nov'],
    datasets: [
      {
        fill: true,
        label: 'Current',
        data: [10, 14, 36],
        // borderColor: "rgb(53, 162, 235)",
        pointRadius: 0,
        backgroundColor: '#F1652875',
        borderColor: '#F16528',
        borderWidth: 0,
      },
      {
        fill: true,
        label: 'Target',
        data: [10, 20, 30, 40, 50],
        borderColor: '#0FAD61',
        pointRadius: 0,
        backgroundColor: '#0FAD61',
        borderCapStyle: 'round',
        borderDash: [7],
        spanGaps: true,
        gradient: {
          backgroundColor: {
            axis: 'y',
            colors: {
              0: '#D9D9D900',
              [max]: '#0C9955',
            },
          },
        },
      },
    ],
  }

  const resetTooltip = () => {
    const ct = document.getElementById('custom-tooltip')
    if (ct) ct.style.opacity = 0
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div
        className='border border-rose-200 rounded-lg p-10'
        onMouseLeave={() => resetTooltip()}
      >
        <div className='relative min-h-[32px]'>
          <div
            id='custom-tooltip'
            className='absolute z-10 top-0 transition-all ease-in-out duration-100 opacity-0 w-full'
            onTouchStart={() => resetTooltip()}
            onClick={() => resetTooltip()}
          >
            <div className='bg-gray-1 flex flex-col justify-center items-center rounded-lg px-4 py-2'>
              <p
                id='tooltip-title'
                className='text-[10px] font-semibold tracking-wide leading-4 mb-1 text-center text-[#78776F]'
              ></p>
              <div className='flex items-center justify-around w-full'>
                <div className='flex gap-1 items-center'>
                  <span
                    id='tooltip-current-color'
                    className='bg-[#F1652875] h-3 w-3 -mt-0.5 rounded-sm opacity-0'
                  ></span>
                  <span
                    id='tooltip-current-0'
                    className='text-[10px] tracking-wide leading-4 font-semibold capitalize opacity-0'
                  >
                    Portfolio:
                  </span>
                  <span
                    id='tooltip-current-1'
                    className='text-[10px] tracking-wide leading-4 font-semibold opacity-0'
                  >
                    100,000,000
                  </span>
                </div>
                <div className='flex gap-1 items-center'>
                  <span
                    id='tooltip-target-color'
                    className='bg-[#0FAD61] h-3 w-3 -mt-0.5 rounded-sm opacity-0'
                  ></span>
                  <span
                    id='tooltip-target-0'
                    className='text-[10px] tracking-wide leading-4 font-semibold capitalize opacity-0'
                  >
                    Target:
                  </span>
                  <span
                    id='tooltip-target-1'
                    className='text-[10px] tracking-wide leading-4 font-semibold opacity-0'
                  >
                    100,000,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoalLineChart data={data} width={320} height={320} />
      </div>
    </div>
  )
}

export default GoalLine
