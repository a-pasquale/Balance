((function(){this.init_sortable_menu=function(){var a;a=$("#menu");if(a.length===0)return;return a.sortable({axis:"x",cursor:"crosshair",connectWith:".nested",update:function(){return $.post("/refinery/update_menu_positions",a.sortable("serialize",{key:"menu[]",expression:/plugin_([\w]*)$/}))}}).tabs(),a.sortable("disable"),a.find("#menu_reorder").click(function(a){return trigger_reordering(a,!0)}),a.find("#menu_reorder_done").click(function(a){return trigger_reordering(a,!1)}),a.find("> a").corner("top 5px")}})).call(this)