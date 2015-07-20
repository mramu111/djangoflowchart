from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import Context, loader
from django.http import Http404
from django.shortcuts import render_to_response
from django.shortcuts import render_to_response, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.template import RequestContext
from django.utils import timezone
import json
from django.http import JsonResponse  

def index(request):
    t = loader.get_template('index.html')
    latest_poll_list=['ramu','rasfd']
    c = Context({
    'latest_poll_list': latest_poll_list,
    })
    return HttpResponse(t.render(c))



def index1(request):
    nodes=[{'name': "Switch1",'id': 0,'x': 0,'y': 0, 'width': 150,\
    'inputConnectors': [  {'name': "P1",},{'name': "B",},{'name': "C",},],\
                   'outputConnectors': [{'name': "A",},{'name': "B",},{'name': "C",},],}, \
       {'name': "Switch 2", 'id': 1,'x': 400,'y': 200, 'width': 150, \
       'inputConnectors': [  {'name': "A",},{'name': "B",},{'name': "C",},],\
       'outputConnectors': [{'name': "A",},{'name': "B",},{'name': "C",},],},]

    connections=[{'name':'c1','source': {'nodeID': 0,'connectorIndex': 1,},\
               'dest': {'nodeID': 1,'connectorIndex': 2,},},\
            {'name':'c2', 'source': {'nodeID': 0,'connectorIndex': 0,},\
            'dest': { 'nodeID': 1,'connectorIndex': 0,},},]

    data={'nodes':nodes,'connections':connections}
    response = JsonResponse(data, safe=False)
    response.status_code=200
    return response





def detail(request):
    p=['radfd']
    return render_to_response('index.html', {'poll': p},
        context_instance=RequestContext(request))



def get_numbers(request):
    data={"a":30,"g":90}
    return data



