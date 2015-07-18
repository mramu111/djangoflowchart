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

  

def index(request):
    t = loader.get_template('index.html')
    latest_poll_list=['ramu','rasfd']
    c = Context({
    'latest_poll_list': latest_poll_list,
    })
    return HttpResponse(t.render(c))



def detail(request):
    p=['radfd']
    return render_to_response('index.html', {'poll': p},
        context_instance=RequestContext(request))


