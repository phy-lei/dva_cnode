<template>
    <div class="tourists__portrait">
        
    </div>
</template>
<script>

export default {
    
    data() {
        return {
            data: {
                people: {
                    name: '目标区域人员流量特征',
                    list: [
                        {
                            text: 'XX景区于2020年8月19日累计人流量达到本年度极值（500人次），历史极值出现于2018年10月1日，当日累计人流量达1000人次',
                            highlight: ['2020年8月19日', '500', '2018年10月1日', '1000']
                        },
                        {
                            text: '该景区昨日累计人流量为 600人次，较前一天增加/减少50%，高于/低于本景区本年度日均累计人流量700人次。',
                            highlight: ['600', '50%', '700']
                        },
                        {
                            text: '通过本年度数据监测分析，XX 景区工作日12 时人流量最少，13时人流量最多；周末14时人流量最少，15时人流量最',
                            highlight: ['12', '13', '14', '15']
                        }
                    ]
                },
                listData: []
            }
        };
    },
    methods: {
        

        changeText() {
          
            this.data.people.list.forEach((item, index) => {
                 var new_world = item.text;
                for (var i = 0; i < item.highlight.length; i++) {
                    new_world = new_world.replace(item.highlight[i], `<span>${item.highlight[i]}</span>`);
                }
                item.text=new_world
            });
            console.log(this.data.people.list);
            
        }
    },
    mounted() {
        this.changeText();
    }
};
</script>
<style  scoped>

</style>