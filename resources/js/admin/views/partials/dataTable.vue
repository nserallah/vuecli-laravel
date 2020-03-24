<template>
  <div>  
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 5,
        perPageDropdown: [8, 10, 12],
        dropdownAllowAll: true,
        nextLabel: 'next',
        prevLabel: 'prev',
        rowsPerPageLabel: 'Rows per page',
        ofLabel: 'of',
        pageLabel: 'page', // for 'pages' mode
        allLabel: 'All',
      }"
      >

      <template slot="table-row" slot-scope="props">
        <component v-if="props.column.component" 
          :is="tableRowComponent(props.column)"
          :vprops="props"
          @del="del"
          @info="info"
          >
        </component>
      </template>

     </vue-good-table>

    <!--Start Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">User Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div id="userInfo" class="modal-body">
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
    <!--End Modal -->
  </div>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
export default {
    data(){
    return {
      columns: [
        {
          label: 'id',
          field: 'id',
        },
        {
          label: 'email',
          field: 'email',
        },
        {
          label: 'first_name',
          field: 'first_name',
          
        },
        {
          label: 'last_name',
          field: 'last_name',
          
        },
        {
          label: 'avatar',
          field: 'avatar',
          html: true,
        },
        {
          label: "Actions",
          field: "actions",
          component : "table-action"
        },
        
      ],
      rows: [] 
    };
  },
  
  methods: {
    getUsers() {
      axios.get('https://reqres.in/api/users')
          .then((response) => {
              this.rows = response.data.data
              for(let i = 0; i < response.data.data.length; i++) {
                let data = response.data.data[i]
                data.avatar = "<img src=" + response.data.data[i].avatar + " alt='avatar'/>";
              }   
          }).catch(error => console.log(error))

    },
    del(row) {
      let id = row.id;
      let index = this.rows.findIndex(x => x.id === id);

      swal("Are you sure you want to do this?", {
      buttons: ["Oh noez!", "Aww yiss!"],
      }).then(willDelete => {
        if(willDelete){
          this.rows.splice(index, 1);
          axios.delete("https://reqres.in/api/users/" + id, {
            data: {id: this.id}
          })
        }
      })   
    },
    info(row){
      let id = row.id;
      let index = this.rows.findIndex(x => x.id === id);

      document.getElementById('userInfo').innerHTML =
        "<ul class='list-unstyled list-info'>" +
          "<li>" + "Id: " + this.rows[index].id + "</li>" +
          "<li>" + "Email: " + this.rows[index].email + "</li>" +
          "<li>" + "First name: " + this.rows[index].first_name + "</li>" +
          "<li>" + "Last name: " + this.rows[index].last_name + "</li>" +
          "<li>" + "<p>User avatar: </p>" + this.rows[index].avatar + "</li>" +
        "</ul>"
    },
    tableRowComponent (column){
      return column.component
    },
 
  },
  computed: {
    funcCom: function() {
      //const myEl = document.getElementById('test')
      return this.rows[0]
    }
  },
  mounted(){
    this.getUsers() 
  }, 
}
</script>

<style>
.modal .modal-body .list-info li{
  background-color: #f2f4f7;
  border: 1px solid #000;
  padding: 10px;
  margin-bottom:5px;
}
.modal .modal-body .list-info li img{
  padding: 3px;
  background-color: #fff;
  border: 1px solid #333
}
</style>