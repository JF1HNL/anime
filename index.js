
const app = new Vue({
  el:"#anime",
  data:{
    mdtext : "# 初期値"
  },
  created: function(){
    this.get_md_text("./anime.md"); 
  },
  computed:{
    mdMakeup : function(){
      return marked(this.mdtext);
    }
  },
  methods:{
    get_md_text:function(pass){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', pass);
      xhr.addEventListener('load' , () => {
        this.mdtext = xhr.responseText
      })
      xhr.send();
    }
  }
})