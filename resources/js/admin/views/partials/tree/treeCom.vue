<template>
  <div class="tree-form">
    <h3 class="text-center text-uppercase mb-3">tree component</h3>
    <form action>
      <div class="row form-group">
        <div class="col-6">
          <label class="label-name">
            Name:
            <input
              class="form-control"
              type="text"
              value
              name="name"
              v-model="newDataNode"
              placeholder="your main category"
            />
          </label>
          <br />
          <p v-if="ifEmpty" style="color: #f00">Enter the name of your main category</p>
          <button
            class="btn btn-primary mb-3 text-uppercase bg-none"
            @click.prevent="addNode"
          >Add a main category</button>
          <br />
          <!-- <button class="btn btn-primary text-uppercase bg-none">add a subcategory</button> -->

          <div class="tree">
            <!-- https://github.com/ParadeTo/vue-tree-list -->
            <vue-tree-list
              @delete-node="onDel"
              :model="data"
              default-tree-node-name="new main category"
              default-leaf-node-name="new subcategory"
              v-bind:default-expanded="true"
            >
              <span class="icon" slot="addTreeNodeIcon">
                <i class="fas fa-plus-square"></i>
              </span>
              <span class="icon" slot="addLeafNodeIcon">＋</span>
              <span class="icon" slot="editNodeIcon">
                <i class="fas fa-edit"></i>
              </span>
              <span class="icon" slot="delNodeIcon">
                <i class="fas fa-trash-alt"></i>
              </span>
              <span class="icon" slot="leafNodeIcon">
                <i class="fas fa-file"></i>
              </span>
              <span class="icon spclass" slot="treeNodeIcon">
                <i class="fas fa-folder-open"></i>
              </span>
            </vue-tree-list>
          </div>
        </div>
        <div class="col-6">
          <div class="row-form mb-2" v-for="(name, i) in names" :key="i">
            <div class="row">
              <div class="col-1">
                <label>Name</label>
              </div>
              <div class="col-6">
                <input class="form-control" type="text" value name="name" v-model="name.nameField" />
              </div>
              <div class="col-3">
                <select v-model="name.selectLang" class="browser-default custom-select">
                  <option selected disabled>language</option>
                  <option value="en" selected>English</option>
                  <option value="ar">Arabic</option>
                </select>
              </div>
              <div class="col-2">
                <span class="icon-span" @click="deleteRow(i, name)">
                  <i class="fas fa-minus"></i>
                </span>
              </div>
            </div>
          </div>
          <span class="icon-span" @click="addNewRow">
            <i class="fas fa-plus"></i>
          </span>
          <label>Description</label>
          <textarea class="form-control" name id cols="30" rows="10"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
export default {
  components: {
    VueTreeList
  },
  data() {
    return {
      names: [
        {
          selectLang: "language",
          nameField: ""
        }
      ],
      newDataNode: "",
      ifEmpty: false,
      newTree: {},
      data: new Tree([
        {
          name: "Designer",
          id: 1,
          pid: 0,
          dragDisabled: true,
          addTreeNodeDisabled: false,
          addLeafNodeDisabled: false,
          editNodeDisabled: false,
          delNodeDisabled: true,
          children: [
            {
              name: "Photoshop",
              id: 2,
              isLeaf: true,
              pid: 1
            },
            {
              name: "Illustrator",
              id: 3,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: "Front End",
          id: 3,
          pid: 0,
          children: [
            {
              name: "HTML",
              id: 2,
              isLeaf: true,
              pid: 1
            },
            {
              name: "CSS",
              id: 3,
              isLeaf: true,
              pid: 2
            },
            {
              name: "Javascript",
              id: 4,
              isLeaf: true,
              pid: 3
            }
          ]
        },
        {
          name: "Back End",
          id: 4,
          pid: 0
        }
      ])
    };
  },
  methods: {
    addNewRow() {
      this.names.push({
        selectLang: "language",
        nameField: ""
      });
    },
    deleteRow(i) {
      if (i > 0) {
        this.names.splice(i, 1);
      }
    },
    onDel(node) {
      //console.log(node);
      node.remove();
    },
    // onChangeName (params) {
    //   console.log(params)
    // },

    // onAddNode (params) {
    //   console.log(params)
    // },

    // onClick (params) {
    //   console.log(params)
    // },
    addNode() {
      var node = new TreeNode({ name: this.newDataNode, isLeaf: false });
      if (!this.data.children) this.data.children = [];
      if (!this.newDataNode) {
        this.ifEmpty = true;
      } else {
        this.data.addChildren(node);
        this.ifEmpty = false;
        this.newDataNode = "";
      }
    },
    getNewTree() {
      var vm = this;
      function _dfs(oldNode) {
        var newNode = {};
        for (var k in oldNode) {
          if (k !== "children" && k !== "parent") {
            newNode[k] = oldNode[k];
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }

      vm.newTree = _dfs(vm.data);
    }
  }
};
</script>

<style>
.tree-form .bg-none {
  background: none;
  color: #000 !important;
  padding: 10px 20px;
}

.tree-form .label-name {
  width: 350px;
}

.tree-form form span.icon-span {
  border: 1px solid #333;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin: auto;
  cursor: pointer;
}

.tree-form form .icon-span:hover {
  background: #6167e0;
  color: #fff;
}
.tree-form form span i {
  line-height: 31px;
}

.btn.btn-primary.active,
.btn.btn-primary.focus,
.btn.btn-primary:focus,
.btn.btn-primary:hover:not(:disabled) {
  background: #6167e0;
}

.tree .icon {
  margin-right: 5px;
  cursor: pointer;
}

.tree .spclass {
  cursor: default;
}

.tree .vtl-icon {
  cursor: pointer;
}

.tree .vtl-node-main > span:hover {
  background-color: transparent;
}
</style>