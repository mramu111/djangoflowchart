
//
// Define the 'app' module.
//
angular.module('app', ['flowChart', ])

//
// Simple service to create a prompt.
//
.factory('prompt', function () {

	/* Uncomment the following to test that the prompt service is working as expected.
	return function () {
		return "Test!";
	}
	*/

	// Return the browsers prompt function.
	return prompt;
})

//
// Application controller.
//
.controller('AppCtrl', ['$scope', '$http', 'prompt', function AppCtrl ($scope, $http, prompt) {

	//
	// Code for the delete key.
	//
	var deleteKeyCode = 46;

	//
	// Code for control key.
	//
	var ctrlKeyCode = 65;

	//
	// Set to true when the ctrl key is down.
	//
	var ctrlDown = false;

	//
	// Code for A key.
	//
	var aKeyCode = 17;

	//
	// Code for esc key.
	//
	var escKeyCode = 27;

	//
	// Selects the next node id.
	//
	var nextNodeID = 10;
    var number=34;
	//
	// Setup the data-model for the chart.
	//


   // res=$http.get('/fl/get_numbers/');
    //res=$http.get('/fl/');
    //$http.get('/fl/index')
     //   .success(function(response) {
            
     //        $scope.chartViewModel = new flowchart.ChartViewModel(chartDataModel);
            
     //       //$scope.names = response.records;
            
            
      //      });

	var chartDataModel = {nodes: [{name: "Switch1",id: 0,x: 0,y: 0,	width: 150,
    inputConnectors: [	{name: "P1",},{name: "B",},{name: "C",},],
                   outputConnectors: [{name: "A",},{name: "B",},{name: "C",},],	
                    },

     {name: "Switch 2",	id: 1,x: 400,y: 200, width: 150,
            inputConnectors: [	{name: "A",},{name: "B",},{name: "C",},],
            outputConnectors: [{name: "A",},{name: "B",},{name: "C",},],},],

     connections: [{	name:'c1',source: {nodeID: 0,connectorIndex: 1,},
               dest: {nodeID: 1,connectorIndex: 2,},},
			{name:'c2',	source: {nodeID: 0,connectorIndex: 0,},
			dest: {	nodeID: 1,connectorIndex: 0,},},]};



    //res=$http.get('/fl/get_numbers/');
    //res=$http.get('/fl/');
    $http.get('/fl/index1/')
        .success(function(response) {
           //alert (response);
           //console.log(response);
            
            //$scope.chartViewModel = new flowchart.ChartViewModel(chartDataModel);

            $scope.chartViewModel = new flowchart.ChartViewModel(response);
            
            //$scope.names = response.records;
            
            
            });



	//
	// Event handler for key-down on the flowchart.
	//
	$scope.keyDown = function (evt) {

		if (evt.keyCode === ctrlKeyCode) {

			ctrlDown = true;
			evt.stopPropagation();
			evt.preventDefault();
		}
	};

	//
	// Event handler for key-up on the flowchart.
	//
	$scope.keyUp = function (evt) {

		if (evt.keyCode === deleteKeyCode) {
			//
			// Delete key.
			//
			$scope.chartViewModel.deleteSelected();
		}

		if (evt.keyCode == aKeyCode && ctrlDown) {
			// 
			// Ctrl + A
			//
			$scope.chartViewModel.selectAll();
		}

		if (evt.keyCode == escKeyCode) {
			// Escape.
			$scope.chartViewModel.deselectAll();
		}

		if (evt.keyCode === ctrlKeyCode) {
			ctrlDown = false;

			evt.stopPropagation();
			evt.preventDefault();
		}
	};

	//
	// Add a new node to the chart.
	//
	$scope.addNewNode = function () {

		var nodeName = prompt("Enter a node name:", "New node");
		if (!nodeName) {
			return;
		}

		//
		// Template for a new node.
		//
		var newNodeDataModel = {
			name: nodeName,
			id: nextNodeID++,
			x: 0,
			y: 0,
			inputConnectors: [
				{
					name: "X"
				},
				{
					name: "Y"
				},
				{
					name: "Z"
				}
			],
			outputConnectors: [ 
				{
					name: "1"
				},
				{
					name: "2"
				},
				{
					name: "3"
				}
			],
		};

		$scope.chartViewModel.addNode(newNodeDataModel);
	};

	//
	// Add an input connector to selected nodes.
	//
	$scope.addNewInputConnector = function () {
		var connectorName = prompt("Enter a connector name:", "New connector");
		if (!connectorName) {
			return;
		}

		var selectedNodes = $scope.chartViewModel.getSelectedNodes();
		for (var i = 0; i < selectedNodes.length; ++i) {
			var node = selectedNodes[i];
			node.addInputConnector({
				name: connectorName,
			});
		}
	};

	//
	// Add an output connector to selected nodes.
	//
	$scope.addNewOutputConnector = function () {
		var connectorName = prompt("Enter a connector name:", "New connector");
		if (!connectorName) {
			return;
		}

		var selectedNodes = $scope.chartViewModel.getSelectedNodes();
		for (var i = 0; i < selectedNodes.length; ++i) {
			var node = selectedNodes[i];
			node.addOutputConnector({
				name: connectorName,
			});
		}
	};

	//
	// Delete selected nodes and connections.
	//
	$scope.deleteSelected = function () {

		$scope.chartViewModel.deleteSelected();
	};

	//
	// Create the view-model for the chart and attach to the scope.
	//
//	$scope.chartViewModel = new flowchart.ChartViewModel(chartDataModel);
}])
;


