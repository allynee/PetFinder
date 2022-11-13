<template>
    <div 
    ref="talkjs"
    style="width:90%; margin=30px; height:500px;"
    id="talkjs-container">
        <i>Loading chat....</i>
    </div>
</template>


<script>
    import Talk from "talkjs"

    export default{
        name:"Inbox",
        data(){
            return{
                // user:this.$store.getters.getuser,
                // conversation:null,
                chatbox:undefined,
                // index:1,

            }
        },
        // methods:{
        //     reRender(){
        //         this.index++
        //     }
        // },
        // props:{
        //     // currentUser:{
        //     //     type:Object,
        //     //     required:true,
        //     // }
        // },

        async mounted(){
            // localStorage.clear('https://app.talkjs.com')

            
            await Talk.ready
                console.log(this.user.userid)
                const me=new Talk.User({
                    id:this.user.userid,    
                    name: this.user.username,
                    email: this.user.email, 
                })

                //now hardcoding from firebase
                const others_obj=this.$store.getters.getOthers
                console.log(others_obj)

                const other=new Talk.User({
                    id:others_obj.userid,
                    name:others_obj.username,
                    email:others_obj.email,
                })
            
                // console.log(me)
                window.talkSession=new Talk.Session({
                appId:'tB4yzcUA',
                me:me,
            })

            const conversation= window.talkSession.getOrCreateConversation(
                Talk.oneOnOneId(me, other)
            )
            conversation.setParticipant(me)
            conversation.setParticipant(other)

            const inbox=window.talkSession.createInbox();
            inbox.select(conversation)
            inbox.mount(this.$refs.talkjs)



            

        },
        computed:{
            user(){
                return this.$store.getters.getuser
            }
        }

    }
</script>



