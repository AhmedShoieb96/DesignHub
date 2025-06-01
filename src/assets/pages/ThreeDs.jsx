import SharedHeroSection from '../components/SharedHeroSection/SharedHeroSection'
import React, { useState, useEffect } from 'react'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Calendar,
  Tag,
  Play,
  Maximize,
  Download,
} from 'lucide-react'
import './ThreeDs.css' // Assuming you have a CSS file for styles
import commercial1 from '../images/design/تجاري/1 (2).jpg'
import commercial2 from '../images/design/تجاري/cafe.jpg'
import commercial3 from '../images/design/تجاري/2 (4).jpg'
import commercial4 from '../images/design/تجاري/bakry.jpg'
import commercial5 from '../images/design/تجاري/5 (4).jpg'

import masterBed1 from '../images/design/bedroom/1.jpg'
import masterBed2 from '../images/design/bedroom/2.jpg'
import masterBed3 from '../images/design/bedroom/3 (4).jpg'
import masterBed4 from '../images/design/bedroom/3.jpg'
import masterBed5 from '../images/design/bedroom/4.jpg'
import masterBed6 from '../images/design/bedroom/MASTER7.jpg'

import childBed1 from '../images/design/childroom/1 (4).jpg'
import childBed2 from '../images/design/childroom/1.jpg'
import childBed3 from '../images/design/childroom/2.jpg'
import childBed4 from '../images/design/childroom/3.jpg'
import childBed5 from '../images/design/childroom/childmoder.jpg'

import bathroom1 from '../images/design/bathroom/2 (5).jpg'
import bathroom2 from '../images/design/bathroom/2.jpg'
import bathroom3 from '../images/design/bathroom/3.jpg'
import bathroom4 from '../images/design/bathroom/4 (5).jpg'
import bathroom5 from '../images/design/bathroom/5 (4).jpg'

import ketchen1 from '../images/design/ketchen/1.jpg'
import ketchen2 from '../images/design/ketchen/3.jpg'
import ketchen3 from '../images/design/ketchen/rec7.jpg'
import ketchen4 from '../images/design/ketchen/rec8.jpg'
import ketchen5 from '../images/design/ketchen/received_1102295126978779.jpeg'
import ketchen6 from '../images/design/ketchen/received_1500428047447270.jpeg'
import ketchen7 from '../images/design/ketchen/received_739009377076656.jpeg'

import clinic1 from '../images/design/clinic/FB_IMG_1643908773416.jpg';
import clinic2 from '../images/design/clinic/FB_IMG_1643908777386.jpg';
import clinic3 from '../images/design/clinic/FB_IMG_1643908779890.jpg';   
import clinic4 from '../images/design/clinic/FB_IMG_1643908785109.jpg';
import clinic5 from '../images/design/clinic/FB_IMG_1643908787073.jpg';
import clinic6 from '../images/design/clinic/FB_IMG_1643908791536.jpg';

import living1 from '../images/design/living/107789738_148704416822806_967439613018503900_o.jpg'
import living2 from '../images/design/living/107815431_148704393489475_727296895581078042_o.jpg'
import living3 from '../images/design/living/107918078_148704376822810_5820255623365587782_o.jpg'
import living4 from '../images/design/living/4 (2).jpg'
import living5 from '../images/design/living/4 (3).jpg'
import living6 from '../images/design/living/6 (2).jpg'


export default function ThreeDs() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState('all')
  // 3D Design specific project data
  const projects = [
    {
      id: 1,
      title: 'commercial design',
      description:
        'High-quality 3D rendering and animation for commercial spaces',
      thumbnail: commercial1,
      images: [commercial1, commercial2, commercial3, commercial4, commercial5],
    },
    {
      id: 2,
      title: 'Master Bedroom design',
      description:
        'Architectural visualization and 3D rendering of modern residential design',
      thumbnail: masterBed1,
      images: [
        masterBed1,
        masterBed2,
        masterBed3,
        masterBed4,
        masterBed5,
        masterBed6,
      ],
    },
    {
      id: 3,
      title: "children's Bedroom design",
      description:
        "3D rendering and animation of children's bedroom design with interactive elements",
      thumbnail: childBed1,
      images: [childBed1, childBed2, childBed3, childBed4, childBed5],
    },
    {
      id: 4,
      title: 'Bathroom design',
      description:
        '3D rendering and visualization of modern bathroom design with realistic textures',
      thumbnail: bathroom1,
      images: [bathroom1, bathroom2, bathroom3, bathroom4, bathroom5],
    },
    {
      id: 5,
      title: 'kitchen design',
      description:
        '3D modeling and rendering of modern kitchen design with interactive features',
      thumbnail: ketchen1,
      images: [
        ketchen1,
        ketchen2,
        ketchen3,
        ketchen4,
        ketchen5,
        ketchen6,
        ketchen7
      ],
    },
    {
      id: 6,
      title: 'clinic design',
      description:
        '3D rendering and visualization of modern clinic design with realistic textures',
      thumbnail:
        clinic1,
      images: [
      clinic1,
      clinic2,
      clinic3,
      clinic4,
      clinic5,
      clinic6
      ],
    },
    {
      id: 7,
      title: 'living room design',
      description:
        '3D rendering and visualization of modern living room design with realistic textures',

      thumbnail:
        living1,
      images: [
        living1,
        living2,
        living3,
        living4,
        living5,
        living6
      ],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  const openGallery = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <div>
      <SharedHeroSection>
        <h2>3D Design</h2>
        <p>Explore our stunning 3D design projects</p>
       
      </SharedHeroSection>
      <div className='threed-design-container'>
        Add commentMore actions
        {/* Header Section */}
        <div className='header-section'>
          <div className='header-content'>
            <h1 className='main-title'>3D Design </h1>
            <p className='main-description'>
              Explore our portfolio of stunning 3D designs, from architectural
              visualizations to product renderings and interactive environments.
            </p>
            <div className='stats-grid'>
              <div className='stat-item'>
                <span className='stat-number'>50+</span>
                <span className='stat-label'>Projects Completed</span>
              </div>

              <div className='stat-item'>
                <span className='stat-number'>5+</span>
                <span className='stat-label'>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        {/* Projects Grid */}
        <div className='projects-grid'>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className='project-card'
              onClick={() => openGallery(project)}
            >
              <div className='project-image-container'>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className='project-image'
                />
                <div className='project-overlay'>
                  <div className='overlay-content'>
                    <Eye className='overlay-icon' />

                    <span className='overlay-text'>View Gallery</span>
                  </div>
                </div>
              </div>

              <div className='project-info'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Gallery Modal */}
        {selectedProject && (
          <div className='gallery-modal'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <div className='modal-title-section'>
                  <h2 className='modal-title'>{selectedProject.title}</h2>
                </div>
                <div className='modal-actions'>
                  <button onClick={closeGallery} className='close-btn'>
                    <X className='close-icon' />
                  </button>
                </div>
              </div>

              {/* Image Display */}
              <div className='image-display'>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${
                    currentImageIndex + 1
                  }`}
                  className='main-image'
                />

                {/* Navigation */}
                <button onClick={prevImage} className='nav-btn nav-prev'>
                  <ChevronLeft className='nav-icon' />
                </button>
                <button onClick={nextImage} className='nav-btn nav-next'>
                  <ChevronRight className='nav-icon' />
                </button>

                {/* Image Counter */}
                <div className='image-counter'>
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className='thumbnail-strip'>
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`thumbnail-btn ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className='thumbnail-image'
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
