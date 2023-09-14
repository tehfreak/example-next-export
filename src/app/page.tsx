import { Grid } from '@/components/Grid/Grid'
import { Typography } from '@/components/Typography/Typography'
import { HandWave } from '@/components/Icons/HandWave'

export default function Home() {
    return (
        <div>
            <section className="">
                <Grid className="">

                    <div className="row-start-1 row-end-1 col-start-[entire-start] col-end-[entire-end] bg-amber-500/60 bg-center bg-cover" style={{ backgroundImage:'url("https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}/>

                    <div className="row-start-1 row-end-1 col-start-[entire-start] col-end-[entire-end] lg:col-end-[track-end_8] bg-black/50"/>

                    <div className="row-start-1 row-end-1 col-start-[inner-start] col-end-[inner-end] lg:col-start-[track-start_1] lg:col-end-[track-end_8] grid items-center justify-items-center lg:justify-items-start py-16 text-white">

                        <Typography variant="text1" className="text-center lg:text-left flex items-center gap-x-2">
                            <HandWave className="w-6 h-6"/> Hello world!
                        </Typography>

                        <Typography variant="title1" className="text-center max-w-[46rem] lg:text-left lg:max-w-[32rem] mt-6" asChild>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                        </Typography>

                        <Typography variant="tagline1" className="text-center max-w-[46rem] lg:text-left lg:max-w-[36rem] mt-6" asChild>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </Typography>

                    </div>

                    <div className="lg:row-start-1 lg:row-end-1 col-start-[inner-start] col-end-[inner-end] lg:col-start-[track-start_9] lg:col-end-[track-end_12] grid items-center">
                        <form className="bg-white px-6 -mt-6 lg:-ml-10">
                            <h2>Sign Up</h2>
                        </form>
                    </div>

                </Grid>
            </section>
        </div>
    )
}
