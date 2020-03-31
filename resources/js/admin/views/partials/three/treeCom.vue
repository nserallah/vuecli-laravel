<template>
  <div class="tree-form">
      <h3 class="text-center text-uppercase">tree component</h3>
      <form action="">
          <div class="row form-group">
            <div class="col-6">
                <label>Name:  <input class="form-control" type="text" value="" name="name"></label><br><br>
                <button class="btn btn-primary mb-3 text-uppercase bg-none " @click.prevent="addMainCat()">Add a main category</button><br>
                <button class="btn btn-primary text-uppercase bg-none">add a subcategory</button>



<!-- https://amsik.github.io/liquor-tree  هذا رابط الtree على الانترنت-->
                <tree :data="data" :options="opts" :filter="filter" ref="tree">
                    <div slot-scope="{ node }" class="node-container">
                        <div class="node-text">{{ node.text }}</div>
                        <div class="node-controls">
                        <a href="" @click.prevent="editNode(node)">Edit</a>
                        <a href="" @click.prevent="removeNode(node)">Remove</a>
                        <a href="" @click.prevent="addChildNode(node)">Add child</a>
                        </div>
                    </div>
                </tree>

                

            </div>
            <div class="col-6">
               
                <div class="row-form  mb-2" v-for="(name, i) in names" :key="i">
                        
                    <div class="row">
                        <div class="col-1"> <label>Name</label></div>
                        <div class="col-6">
                            <input class="form-control" type="text" value="" name="name" v-model="name.nameField">
                        </div>
                        <div class="col-3">
                            <select v-model="name.selectLang" class="browser-default custom-select">
                                <option selected disabled>language</option>
                                <option value="en" selected>English</option>
                                <option value="ar">Arabic</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <span class="icon-span" @click="deleteRow(i, name)"><i class="fas fa-minus"></i></span>
                        </div>
                    </div>
                </div>
                <span class="icon-span" @click="addNewRow"><i class="fas fa-plus"></i></span>
                <label>Description</label>
                <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
      </form>
  </div>
</template>

<script>
export default {
     data: () => ({
         names: [{
            
            selectLang: 'language',
            nameField: '',
            
        }],
          data: [
            { text: 'Item 1', state: { visible: true } },
            { text: 'Item 2', data: { customProp: 'AAAAAAAAAAAAAAAAAAAA' } },
            { text: 'Item 3', state: { selected: true } },
            { text: 'Item 4', children: [
                { text: 'Item 4.1'}, 
                { text: 'Item 4.2'},
                { text: 'Item 4.3'},
                { text: 'Item 4.4'},
                { text: 'Item 4.5'},
            ]},
            { text: 'Item 5', children: [
                { text: 'Item 5.1', state: { disabled: true } },
                { text: 'Item 5.2', state: { selectable: false } },
                { text: 'Item 5.3'},
                { text: 'Item 5.4'},
                { text: 'Item 5.5'},
            ]},
            
        ],
          filter: null,
          opts: {
          	// minFetchDelay: 1000,
            // fetchData: (node) => {
            // 	return Promise.resolve(data[node.id - 1])
            // },
            checkbox: true
          }
        }),
        filters: {
          time(time) {
            return +time
          }
        },
        
        mounted() {
        	this.$refs.tree.$on('node:editing:start', (node) => {
          	console.log('Start editing: ' + node.text)
          })
          
        	this.$refs.tree.$on('node:editing:stop', (node, isTextChanged) => {
          	console.log('Stop editing: ' + node.text + ', ' + isTextChanged)
          })

        },
        
        methods: {
            addMainCat() {
                
                this.data.push({ text: 'new item'})
                console.log(this.data)
            },
            addNewRow() {
            this.names.push({
                selectLang: 'language',
                nameField: '',
                })
        },
         deleteRow(i) {
            if (i > 0) {
                this.names.splice(i, 1);
            }
        },
          editNode(node, e) {
            node.startEditing()
          },

          removeNode(node) {
            if (confirm('Are you sure?')) {
              node.remove()
            }
          },

          addChildNode(node) {
            if (node.enabled()) {
            	node.append('New Node')
            }
          },

          initEventViewer(event) {
            const events = this.events
						debugger;
            return function (node, newNode) {
              let nodeText = '-'
              let targetNode = newNode && newNode.text ? newNode : node

              if (targetNode && targetNode.text) {
                nodeText = targetNode.text
              }

              events.push(
                Object.assign(
                  {},
                  event,
                  { time: new Date, nodeText, id: key++ }
                )
              )

              console.log(event, arguments)
            }
          }
        }
        
      
}
</script>

<style>
.tree-form .bg-none{
    background: none;
    color: #000 !important;
    padding: 10px 20px
}

.tree-form form span.icon-span{
    border:1px solid #333;
    height: 35px;
    width:35px;
    border-radius: 50%;
    text-align: center;
    display: block;
    margin: auto;
    cursor: pointer;
}

.tree-form form span:hover {
    background: #6167E0;
    color: #fff
}
.tree-form form span i{
    line-height: 31px; 
}

.btn.btn-primary.active, .btn.btn-primary.focus, .btn.btn-primary:focus, .btn.btn-primary:hover:not(:disabled){
    background: #6167E0;
}



</style>