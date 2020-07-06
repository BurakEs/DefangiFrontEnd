<template>
    <div id="scene">
            <router-link to="/"><span class="star">★</span></router-link>
        <div class="moon">
            <span class="crater"></span>
            <span class="crater"></span>
            <span class="crater"></span>
            <span class="crater"></span>
            <span class="crater"></span>
            <span class="crater"></span>
        </div>
    </div>
</template>

<script>
export default {
        name: 'Moon',
        data() {
            return {
             count:1000,
             i:0,
            }
        },
        methods: {
            star(){
                let scene = document.querySelector('#scene');
                while(this.i < this.count){
                    let star = document.createElement("i");
                    let x = Math.floor(Math.random() * window.innerWidth);
                    let y = Math.floor(Math.random() * window.innerHeight);
                    let duration = Math.random() * 10;
                    let size = Math.random() * 3;

                    star.style.left = x +'px';
                    star.style.top = y + 'px';
                    star.style.width = 1 + size + 'px';
                    star.style.height = 1 + size + 'px';
                    star.style.animationDuration = 5 + duration + 's';
                    star.style.animationDelay = '0.'+ duration + 's';
                    star.style.boxShadow = "0px 0px 3px 1px rgb(255,255,255,0.5)";
                    star.style.borderRadius="50%";

                    scene.appendChild(star);
                    this.i++;
                }
            }

        },
        mounted:function(){
            this.star();
        },
        computed: {
          
        }
    }
</script>
<style >
#scene
{
    position: relative;
    widows: 100%;
    height: 100vh;
    background: #000;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
i {
    position: absolute;
    background: #fff;
    animation: animate linear infinite;
}
@keyframes animate {
    0%{
        opacity: 0;
        transform:  translateY(0);
    }
    10%,90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform:  translateY(-100px);
    }
}

.star{
    position: relative;
    color:#fff;
    font-size: 15px;
    font-weight: bold;
    top:250px;
    left:30%;
    right: 30%;
    animation: animate linear infinite 3s;
}


.moon
{
    position: relative;
    z-index: 5000;
    width: 800px;
    height: 700px;
    border-radius: 50%;
    background: #bdc3c7;
    bottom: -350px;
    box-shadow: inset -20px 15px 19px 20px rgba(143,143,146,0.7);
}
.moon::before
{
    content: '';
    position: absolute;
    top: 180px;
    right:0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(140deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 100%);
}
.moon::after
{
    content: '';
    position: absolute;
    top: -20px;
    left: 200px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(140deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 100%);
}
.moon .crater:nth-child(1)
{
    position: absolute;
    width: 90px;
    height: 90px;
    display: flex;
    background: radial-gradient(circle, rgba(189,195,199,1) 40%, rgba(47,51,54,0.2) 100%);
    box-shadow: inset 0px 3px 5px 3px rgba(143,143,146,0.6);
    box-shadow: black;
    border-radius: 50%;
    margin:115px 0 0 95px;
}
.moon .crater:nth-child(2)
{
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    background: radial-gradient(circle, rgba(189,195,199,1) 50%, rgba(47,51,54,0.5) 100%);
    box-shadow: inset 4px 3px 20px 3px rgba(143,143,146,0.6);
    box-shadow: black;
    border-radius:50%;
    margin: 205px 0 0 145px;
}
.moon .crater:nth-child(3)
{
    position: absolute;
    width: 33px;
    height: 30px;
    display: flex;
    background: radial-gradient(circle, rgba(189,195,199,1) 50%, rgba(47,51,54,0.5) 100%);
    box-shadow: inset 4px 3px 20px 3px rgba(143,143,146,0.6);
    box-shadow: black;
    border-radius:50%;
    margin: 180px 0 0 180px;
}
.moon .crater:nth-child(4)
{
    position: absolute;
    right: 0;
    width: 200px;
    height: 190px;
    display: flex;
    background: radial-gradient(circle, rgba(189,195,199,1) 50%, rgba(47,51,54,0.5) 100%);
    box-shadow: inset -1px -20px 20px 0px rgba(143,143,146,0.6);
    box-shadow: black;
    border-radius:50%;
    margin: 250px 180px 0px 0px;
}
.moon .crater:nth-child(5)
{
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    display: flex;
    background: radial-gradient(circle, rgba(189,195,199,1) 50%, rgba(47,51,54,0.5) 100%);
    box-shadow: inset -1px -20px 20px 0px rgba(143,143,146,0.6);
    box-shadow: black;
    border-radius:50%;
    margin: 210px 180px 0px 0px;
}
.moon .crater:nth-child(6)
{
    position: absolute;
    right: 0;
    width: 100px;
    height: 100px;
    display: flex;
    background: radial-gradient(circle, rgba(189,195,199,1) 50%, rgba(47,51,54,0.5) 100%);
    box-shadow: inset -1px -20px 20px 0px rgba(143,143,146,0.6);
    box-shadow: black;
    border-radius:50%;
    margin: 130px 250px 0px 0px;
}
</style>